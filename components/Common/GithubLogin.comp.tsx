import { IRootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";
import { FaGithub } from "react-icons/fa";

const GitHubLogin = ({ text = "Sign In" }) => {
  const { settings } = useSelector((state: IRootState) => state.common.data);

  const handleGitHubLogin = () => {
    if (!settings?.github_auth_client_id) return;
    const client_id = settings?.github_auth_client_id;
    const currentDomainUrl = window.location.origin;
    const redirect_uri = `${currentDomainUrl}/login`;
    const githubOAuthUrl = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=user`;

    window.location.href = githubOAuthUrl;
  };

  return (
    <div>
      <button
        className="flex  items-center justify-center rounded-full p-0.5 bg-gray-800 font-semibold text-white shadow-md hover:bg-gray-900"
        onClick={handleGitHubLogin}
      >
        <FaGithub size={36} />
        {/* {text} */}
      </button>
    </div>
  );
};

export default GitHubLogin;
