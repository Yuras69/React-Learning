import React from "react";

const Profile = () => {
    const name = "Ashwini";
    return (
        <div>
            <img src="guddu.png" alt="guddu"className="w-50 h-50 rounded-full mx-auto justify-center" />
            <h1 className="text-3xl font-bold text-center mt-4">Name: {name}</h1>

        </div>
    );
};
export default Profile;
