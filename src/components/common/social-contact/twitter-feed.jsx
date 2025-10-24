import React, { useEffect, useRef } from "react";

const TwitterFeed = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Check if the script is already included
        if (!window.twttr) {
            const script = document.createElement("script");
            script.src = "https://platform.twitter.com/widgets.js";
            script.async = true;
            script.charset = "utf-8";
            document.body.appendChild(script);
        } else {
            // Reload widgets if script already exists
            window.twttr.widgets.load(containerRef.current);
        }
    }, []);

    return (
        <div ref={containerRef}>
            <a
                className="twitter-timeline"
                href="https://twitter.com/github?ref_src=twsrc%5Etfw"
            >
                Tweets by github
            </a>
        </div>
    );
};

export default TwitterFeed;
