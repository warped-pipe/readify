// if user tries to access /index.html or /index, redirect
const domain = "https://readify.warp-pipe.net/";
if (window.location.href != domain) {
    window.location.replace(domain);
}