const Session = {
    setLogin(login: boolean) {
        localStorage.setItem("login", login ? "1" : "0");
    },
    isLogin() {
        return localStorage.getItem("login") === "1";
    },
    getUser(): UserTypes {
        return localStorage.getItem("user") === "1" ? "usuario" : "admin";
    },
	setUser(user: UserTypes){
		localStorage.setItem("user", (user == "usuario") ? "1" : "0"); 
	}
};
export type UserTypes = "usuario" | "admin";

export default Session;
