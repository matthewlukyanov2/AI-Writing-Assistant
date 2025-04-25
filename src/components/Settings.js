import React, { useState, useEffect }  from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import "./Settings.css";
import "./Home.css";

const Settings = () => {
  const user = auth.currentUser;
  const [username, setUsername] = useState("User");
  const [editing, setEditing] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
const [previewURL, setPreviewURL] = useState(null);
  const [tempUsername, setTempUsername] = useState(username);
  const [lightMode, setLightMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);
    const navigate = useNavigate();

    // Load saved username and theme on mount
useEffect(() => {
  const savedUsername = localStorage.getItem("username");
  const savedTheme = localStorage.getItem("lightMode");
  const savedPic = localStorage.getItem("profilePic");

if (savedPic) {
  setPreviewURL(savedPic);
}

  if (savedUsername) {
    setTempUsername(savedUsername);
  }

  if (savedTheme === "true") {
    setLightMode(true);
  }
}, []);

    // Light mode toggle
  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [lightMode]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        const currentUID = firebaseUser.uid;
        const savedUID = localStorage.getItem("userUID");
        const savedUsername = localStorage.getItem("username");
  
        // ✅ If it's the same user, load saved stuff
        if (savedUsername && savedUID === currentUID) {
          setUsername(savedUsername);
          setTempUsername(savedUsername);
        } else {
          // 👑 Fresh fetch from Firebase
          const docRef = doc(db, "users", currentUID);
          const docSnap = await getDoc(docRef);
  
          const fetchedUsername = docSnap.exists()
            ? docSnap.data().username
            : firebaseUser.displayName || firebaseUser.email || "User";
  
          setUsername(fetchedUsername);
          setTempUsername(fetchedUsername);
  
          // 💾 Save fresh username + UID to localStorage
          localStorage.setItem("username", fetchedUsername);
          localStorage.setItem("userUID", currentUID);
        }
      }
    });
  
    return () => unsubscribe();
  }, []);
  
  

  const toggleLightMode = () => {
    const newMode = !lightMode;
    setLightMode(newMode);
    localStorage.setItem("lightMode", newMode);
  };  

  const handleUsernameSave = () => {
    setUsername(tempUsername);
    setEditing(false);
    localStorage.setItem("username", tempUsername);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
    setProfilePic(file);
    setPreviewURL(preview);
    localStorage.setItem("profilePic", preview);
    }
  };
  
  
    const handleLogout = async () => {
        auth.signOut().then(() => {
      navigate("/");
    });
};

  return (
    <div className="phone-frame login-frame">
      <div className="notch">
        <div className="camera-dot"></div>
      </div>

      <div className="back-arrow">
        <Link to="/ai">←</Link>
      </div>
      <h1>Welcome, {username}!</h1>
      <h1 className="login-title">Settings</h1>
      <div className="settings-content">

       {/* Username Section */}
       <div className="username-row">
  <label style={{ fontWeight: "bold", marginRight: "0.5rem" }}>Username:</label>
  {editing ? (
    <>
      <input
        value={tempUsername}
        onChange={(e) => setTempUsername(e.target.value)}
        style={{ marginRight: "0.5rem" }}
      />
      <button onClick={handleUsernameSave}>Save</button>
    </>
  ) : (
    <>
      <span>{username}</span>
      <FiEdit className="edit-icon" onClick={() => setEditing(true)} />
    </>
  )}
</div>

<div className="profile-pic-container">
        <div className="profile-pic-section">
        <label style={{ fontWeight: "bold", marginRight: "0.5rem" }}>Profile Picture:</label>
  <label htmlFor="profilePicInput" className="profile-pic-label">
    {previewURL ? (
      <img src={previewURL} alt="Profile" className="profile-pic-preview" />
    ) : (
      "Choose File"
    )}
  </label>
  <input
    type="file"
    accept="image/*"
    id="profilePicInput"
    className="profile-pic-input"
    onChange={handleImageChange}
  />
</div>
</div>



        {/* Light Mode Toggle */}
        <div className="toggle-row">
          <label htmlFor="lightToggle">☀️ Light Mode</label>
          <input
  id="lightToggle"
  type="checkbox"
  checked={lightMode}
  onChange={toggleLightMode}
/>

        </div>

        {/* Logout Button */}
        <button
          onClick={() => setShowModal(true)}
          style={{ background: "#e11d48", color: "#fff", padding: "0.5rem", borderRadius: "8px", border: "none", cursor: "pointer" }}
        >
          Logout
        </button>
      </div>

      {/* Logout Confirmation Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Are you sure you want to logout, {username}?</h3>
            <label>
              <input
                type="checkbox"
                checked={confirmLogout}
                onChange={() => setConfirmLogout(!confirmLogout)}
              />{" "}
              Yes, I’m sure
            </label>
            <button
              className={confirmLogout ? "enabled" : ""}
              onClick={handleLogout}
              disabled={!confirmLogout}
            >
              Logout
            </button>
            <button
              style={{ marginTop: "0.5rem" }}
              onClick={() => {
                setShowModal(false);
                setConfirmLogout(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
