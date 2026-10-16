import React from "react";

/**
 * Authentic SVG icons for Parmeshwar's tech stack:
 * Java, Spring Boot, Golang, Apache Kafka, Git, GitHub
 */
export const TechIcon = ({ name, size = 32, className = "" }) => {
  const norm = (name || "").toLowerCase().trim();

  switch (norm) {
    case "java":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 256 348"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Official Java Cup & Steam SVG */}
          <path
            d="M83.2 254.4c0 0-14.7 10.6 10.4 14.3 30.5 4.5 46.2 4.2 80-2.8 0 0 7.8 5-7.5 9-55.8 14.5-121.7-6.2-82.9-20.5z"
            fill="#5382A1"
          />
          <path
            d="M71.5 220.5c0 0-16.7 13.5 8.7 17.5 31.5 5 57.5 5.5 102.3-3.6 0 0 6.1 4.5-9.3 8.3-60.5 14.8-142.1-5.3-101.7-22.2z"
            fill="#5382A1"
          />
          <path
            d="M136.1 146.9c13.7 15.7-3.6 29.8-3.6 29.8s34.8-17.8 18.9-40.4c-15.3-21.7-27.1-32.3 36.8-68.9 0 0-90.8 22.8-52.1 79.5z"
            fill="#E76F00"
          />
          <path
            d="M211.3 293.7c-21.8 17.2-94.8 24.3-138.8 2.2-7.2-3.6 10.4-1.9 16.5-1.1 43.8 5.7 94.6 3 130.6-13.6 0 0-3.6 8.9-8.3 12.5z"
            fill="#5382A1"
          />
          <path
            d="M74.8 181.7c-17.9 3.5-35.3 7.8-35.3 7.8s15.7 2.9 26.6 2.3c27.1-1.6 63.8-3.7 107.5-18.7 0 0 7.4 3.7-4.9 6.7-46.7 11.4-124.9 14.4-93.9-1.9v3.8z"
            fill="#5382A1"
          />
          <path
            d="M185 204.6c23.6-12.2 32.8-27.8 32.8-27.8-9 5-27.2 9.6-43.2 10.5 20-10.7 34.6-26.6 34.6-26.6-45.7 11.2-86.8 13.7-123.6 15.6-24.8 1.3-48.4-1.2-48.4-1.2s11.5 8 28.5 12.6c39.6 10.7 78.4 2.8 119.3 16.9z"
            fill="#E76F00"
          />
          <path
            d="M165.7 77.8c22.1 23.4-12.6 44.8-12.6 44.8s42.4-23.7 25.4-55.8c-15.6-29.3-30.8-43.7 30.6-66.8 0 0-89.9 24.1-43.4 77.8z"
            fill="#E76F00"
          />
          <path
            d="M174.5 329.8c-52 3.8-107.2 3.3-151.7-15.6 0 0-4.6 3.8 5 6.4 46.1 12.4 121.7 14.6 169.5 2.8 0 0-10.1 3.5-22.8 6.4z"
            fill="#5382A1"
          />
        </svg>
      );

    case "spring boot":
    case "springboot":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 256 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Official Spring Leaf SVG */}
          <path
            d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm-8.8 193.3c-4.1 1.7-8.7 2.4-13.4 1.7-14.8-2.3-25.2-15.6-23.4-30.6 1.7-14.2 13.9-24.8 28.3-24.8 2.5 0 5.1.3 7.6 1 4.5-27.7 26.5-50.4 55.7-56.7 31.8-6.9 63.8 8.4 77.5 37.8-16.7 40.5-56.8 68.2-102.3 71.6h-3.4c-8.9 0-17.7-1.1-26.6-3.2 1.6-4.5 2.7-9.3 3.1-14.3 1.1-11.2-4.1-21.8-13.1-27.5z"
            fill="#6DB33F"
          />
          <path
            d="M141.2 84.7c-26.2 5.7-46 26.1-50 51-2.2-.6-4.5-.9-6.8-.9-12.9 0-23.9 9.5-25.4 22.3-1.6 13.5 7.7 25.5 21 27.5 4.2.6 8.3 0 12-1.5 8.1 5.1 12.8 14.6 11.8 24.7-.4 4.5-1.4 8.8-2.8 12.9 8 1.9 15.9 2.9 23.9 2.9h3.1c40.9-3.1 76.9-28 91.9-64.4-12.3-26.4-41-40.2-69.6-34z"
            fill="#FFFFFF"
            fillOpacity="0.9"
          />
          <path
            d="M128 116.5c-15.6 10.4-23.9 28.3-21.6 47.1 2.4 19.3 17.6 34.6 37 36.9 3.5.4 7 .2 10.4-.5 25.1-5.1 43.1-26.5 43.6-52.2-22.5 1-46.7-10.8-60.8-24.8-2.8-2.3-5.7-4.5-8.6-6.5z"
            fill="#6DB33F"
          />
        </svg>
      );

    case "golang":
    case "go":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 256 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Official Go Gopher / Go wordmark */}
          <path
            d="M74.9 14.6C62.7 10.2 46.8 9 37.8 9.3c-27.2.9-37.4 19.4-37.4 39.8 0 24.4 15.7 41.5 41.5 41.5 24.8 0 38.3-15.3 40.5-30.8H42.7v-13h55.6c.9 5.6 1.3 11.5 1.3 17.4 0 24.7-15.4 46.8-49.3 46.8C20.6 111 0 91.8 0 54.7 0 20.9 23.3 0 56.5 0c14.2 0 28.5 3.5 38.7 8.1l-20.3 6.5zm82.8 35.8c0-21.8 17.6-39.7 39.4-39.7 21.8 0 39.4 17.8 39.4 39.7s-17.6 39.7-39.4 39.7c-21.8 0-39.4-17.9-39.4-39.7zm98.4 0c0-32.9-26.4-59.4-59-59.4-32.6 0-59 26.4-59 59.4 0 32.9 26.4 59.4 59 59.4 32.6 0 59-26.5 59-59.4z"
            fill="#00ADD8"
          />
        </svg>
      );

    case "apache kafka":
    case "kafka":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 256 363"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Apache Kafka Node Network SVG */}
          <circle cx="128" cy="181.5" r="30.5" fill="#FF8FAB" />
          <circle cx="128" cy="30.5" r="30.5" fill="#C4B5FD" />
          <circle cx="225.5" cy="86.8" r="30.5" fill="#67E8F9" />
          <circle cx="225.5" cy="276.2" r="30.5" fill="#F472B6" />
          <circle cx="128" cy="332.5" r="30.5" fill="#C4B5FD" />
          <circle cx="30.5" cy="276.2" r="30.5" fill="#67E8F9" />
          <circle cx="30.5" cy="86.8" r="30.5" fill="#FF8FAB" />
          <path
            d="M128 61v90m0 61v90M52 101l57 57m38 47l57 57M204 101l-57 57m-38 47l-57 57"
            stroke="#FFFFFF"
            strokeWidth="12"
            strokeLinecap="round"
          />
        </svg>
      );

    case "git":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 256 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Git Diamond & Branches SVG */}
          <path
            d="M250.7 114.7L141.3 5.3c-7-7-18.4-7-25.5 0L92.7 28.5l32.4 32.4c7.6-2.6 16.4-.8 22.3 5.1 6 6 7.7 14.8 5.1 22.4l31.2 31.2c7.6-2.6 16.4-.8 22.4 5.1 8.5 8.5 8.5 22.2 0 30.7s-22.2 8.5-30.7 0c-6.1-6.1-7.8-15.1-5-22.8L140 101.4v60.9c2 .9 3.9 2.2 5.5 3.8 8.5 8.5 8.5 22.2 0 30.7s-22.2 8.5-30.7 0-8.5-22.2 0-30.7c2-2 4.4-3.5 7.1-4.4V100c-2.7-.9-5.1-2.4-7.1-4.4-6.1-6.1-7.7-15.2-4.8-22.9L77.4 39.8 5.3 111.9c-7 7-7 18.4 0 25.5l109.4 109.4c7 7 18.4 7 25.5 0l110.5-106.6c7-7.1 7-18.5 0-25.5z"
            fill="#F05032"
          />
        </svg>
      );

    case "github":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 256 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* GitHub Octocat Silhouette SVG */}
          <path
            d="M128 0C57.3 0 0 57.3 0 128c0 56.5 36.7 104.5 87.5 121.5 6.4 1.2 8.7-2.8 8.7-6.2 0-3.1-.1-11.2-.2-22-35.6 7.7-43.1-17.2-43.1-17.2-5.8-14.8-14.2-18.7-14.2-18.7-11.6-7.9.9-7.8.9-7.8 12.8.9 19.6 13.2 19.6 13.2 11.4 19.5 30 13.9 37.3 10.6 1.2-8.3 4.5-13.9 8.1-17.1-28.4-3.2-58.3-14.2-58.3-63.3 0-14 5-25.4 13.2-34.4-1.3-3.2-5.7-16.3 1.3-34 0 0 10.8-3.4 35.3 13.2 10.2-2.8 21.2-4.3 32.2-4.3 11 0 22 1.4 32.2 4.3 24.5-16.6 35.3-13.2 35.3-13.2 7 17.6 2.6 30.7 1.3 34 8.2 8.9 13.2 20.4 13.2 34.4 0 49.2-29.9 60-58.4 63.2 4.6 4 8.7 11.8 8.7 23.8 0 17.2-.2 31.1-.2 35.3 0 3.4 2.3 7.4 8.8 6.2C219.3 232.4 256 184.4 256 128 256 57.3 198.7 0 128 0z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "docker":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M4.5 10.5h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm-6-3h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm-3-3h2v2h-2v-2z"
            fill="#0db7ed"
          />
          <path
            d="M22.5 11.8c-.5-.4-1.5-.5-2.2-.2-.2-.9-.8-1.7-1.7-2.1l-.8-.4-.5.7c-.7 1-1.1 2.3-1.1 3.6 0 .5.1 1 .2 1.5-.7.4-1.9.6-3 .6H1.5c-.3 1.8.3 3.6 1.4 5 1.7 2 4.2 3.1 7.1 3.1 7.2 0 12.5-4.8 12.8-11.4.1-.1.1-.3.1-.4-.1 0-.2-.1-.4-.1z"
            fill="#0db7ed"
          />
        </svg>
      );

    case "kubernetes":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z"
            stroke="#326ce5"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="12" cy="12" r="3.5" fill="#326ce5" />
          <path
            d="M12 5.5v3M12 15.5v3M6.5 8.7l2.6 1.5M14.9 13.8l2.6 1.5M6.5 15.3l2.6-1.5M14.9 10.2l2.6-1.5"
            stroke="#326ce5"
            strokeWidth="1.5"
          />
        </svg>
      );

    default:
      return (
        <div
          style={{
            width: size,
            height: size,
            borderRadius: "8px",
            background: "rgba(255, 143, 171, 0.15)",
            border: "1px solid rgba(255, 143, 171, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            fontWeight: "bold",
            color: "#ff8fab"
          }}
        >
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
};
