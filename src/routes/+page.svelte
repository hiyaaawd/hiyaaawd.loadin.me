<script>
    // Image is served from static folder
    function openImage(src) {
        window.open(src, "_blank");
    }
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="anonymous"
    />
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div class="main-container">
    <div class="top-row"></div>
    <div class="middle-row">
        <div class="left-column">
            <h5>My interests!</h5>

            <img class="profile-img" src="/pfp.jpeg" alt="Profile Picture" />

            <p>CSM PEAK!!</p>
            <a href="https://chainsaw-man.fandom.com/wiki/Chainsaw_Man_Wiki">
                <p>CSM PEAK!!</p>
            </a>
            <h5>Games i play:</h5>
            <ul align="center">
                <li>Minecraft(modded, unmodded)</li>
                <li>Roblox</li>
                <li>lots more but im too lazy to list lol</li>
                <a
                    href="https://steamcommunity.com/profiles/76561199306865544/"
                >
                    add me up!</a
                >
            </ul>
            <p></p>
        </div>
        <div class="middle-column">
            <h1>Loading.xiu!</h1>
            <h6>And about me!!</h6>
            <p>student btw!</p>
            <h5 align="center">Skills!</h5>
            <p1>YOU HAVE NONE!</p1>
            <h6>
                i know svelte (not the best) c++, python and some typescript
            </h6>
            <p>fun fact: this is made in svelte!</p>
        </div>

        <div class="right-column">
            <h2>And my Setup!!</h2>
            <a
                class="setup-link"
                href="setup.png"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img class="setup-img" src="setup.png" alt="Setup Image" />
            </a>
            <p>so small!</p>
            <h5>My stuff:</h5>
            <ul>
                <li>keyboard: random one off amazon</li>
                <li>mouse: Logitech G203</li>
                <li>monitor: forgot exact brand but 240hz 1080p</li>
                <li>headphones: random earbuds for now lol</li>
            </ul>
            <h5>My OS:</h5>
            <h6>I just use nobara lol</h6>
            <h6>Gnome 48!</h6>
        </div>
    </div>
</div>

<style>
    :global(html),
    :global(body) {
        height: 100%;
        margin: 0;
        padding: 0;
        background: linear-gradient(135deg, #db9f12 0%, #764ba2 100%);
        overflow: hidden;
    }

    .main-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        text-align: center;
        font-family:
            "Inter",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            sans-serif;
        color: white;
        padding: 1rem;
        box-sizing: border-box;
    }

    .top-row {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .middle-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        gap: 2rem;
        width: 100%;
        max-width: 900px;
    }

    ul {
        text-align: center;
        padding-left: 0;
        list-style-position: inside;
    }

    .left-column,
    .right-column {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
    }

    h1 {
        margin: 0 0 0.5rem;
        font-size: 2.5rem;
        font-weight: 600;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        letter-spacing: -0.02em;
        color: #ffd180;
    }

    h6 {
        margin: 0;
        font-size: 1.2rem;
        font-weight: 400;
        color: #ffd180;
        opacity: 0.8;
    }

    h5 {
        margin: 0 0 1rem;
        font-size: 2rem;
        font-weight: 500;
        text-shadow: 0 2px 4px rgba(0, 0, 1, 1);
        letter-spacing: -0.02em;
        color: #e6c8a0; /* Gray-orangish color */
    }

    h5:hover {
        text-decoration: underline;
        color: #ffd180; /* Brighter orange on hover */
    }

    p {
        margin: 0.2rem 0 0;
        font-size: 0.6rem;
        font-weight: 400;
        opacity: 0.4;
    }

    p1 {
        margin: 0.2rem 0 0;
        font-size: 0.6rem;
        font-weight: 400;
        opacity: 0.4;
        text-decoration: line-through;
    }

    a {
        margin: 0.2rem 0 0;
        font-size: 0.6rem;
        font-weight: 400;
        opacity: 0.4;
        text-decoration: none;
        color: #ffd180;
    }

    a:hover {
        text-decoration: underline;
        color: #ffd180;
    }

    /* Ensure the setup image link is fully opaque and doesn't inherit low opacity from generic anchors */
    .setup-link {
        opacity: 1 !important;
    }

    ul {
        margin: 0.5rem 0 0;
        font-size: 1rem;
        font-weight: 400;
        opacity: 1;
        color: burlywood;
    }

    .profile-img {
        width: 220px;
        height: 150px;
        border-radius: 12px;
        object-fit: cover;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        border: 4px solid rgba(255, 255, 255, 0.2);
        transition: transform 0.3s ease;
    }

    .setup-img {
        width: 220px;
        height: 150px;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        border: 4px solid rgba(255, 255, 255, 0.2);
        transition: transform 0.3s ease;
        cursor: pointer;
        opacity: 1;
        filter: none;
    }

    h2 {
        margin: 0 0 1rem;
        font-size: 2rem;
        font-weight: 500;
        text-shadow: 0 2px 4px rgba(0, 0, 1, 1);
        letter-spacing: -0.02em;
        color: #c8a0e6; /* Purplish color */
    }

    h2:hover {
        text-decoration: underline;
        transform: scale(1.05);
        color: #d6a4ff; /* Brighter purple on hover */
    }

    .profile-img:hover,
    .setup-img:hover {
        transform: scale(1.05);
        opacity: 0.8;
        filter: blur(1px);
    }

    @media (max-width: 700px) {
        .middle-row {
            flex-direction: column;
            gap: 1.5rem;
        }

        .profile-img,
        .setup-img {
            width: 140px;
        }

        h5,
        h2 {
            font-size: 1.75rem;
        }
    }
</style>
