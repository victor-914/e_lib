export const handleLogout = () => {
  localStorage.removeItem("access");
  alert("log out successful");
};
