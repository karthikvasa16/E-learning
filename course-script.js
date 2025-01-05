let completedVideos = 0; // Track the number of completed videos
const totalVideos = 5;   // Total number of videos in the course

// Load progress from localStorage when the page loads
window.onload = function () {
    // Initialize progress bar to 0% on page load
    updateProgressBar();
    updateVideoStatuses();
};
function toggleDropdown() {
    const dropdown = document.getElementById('profileDropdown');
    dropdown.classList.toggle('active');
}
// Function to load a video and mark it as completed
function loadVideo(url, videoNumber) {
    const statusText = document.getElementById(`status${videoNumber}`);

    // Check if the video has already been watched
    if (!isVideoWatched(videoNumber)) {
        // Change the iframe src to the selected video
        document.getElementById('videoPlayer').src = url;

        // Mark the video as completed by changing its status text
        if (statusText) {
            statusText.innerHTML = '<span class="completed-status">Completed</span>';
        }

        // Mark the video as watched and update the progress bar if it's not fully completed
        if (completedVideos < totalVideos) {
            markVideoAsWatched(videoNumber);
            updateProgressBar(); // Update progress after video is marked
        }
    }
}

// Function to check if a video has already been watched
function isVideoWatched(videoNumber) {
    return false;  // All videos are considered unwatched when the page is loaded
}

// Function to mark a video as watched
function markVideoAsWatched(videoNumber) {
    // Increment the completed videos count only if it's the first time watching this video
    completedVideos++;
}

// Function to update the progress bar based on the number of completed videos
function updateProgressBar() {
    const progressPercentage = (completedVideos / totalVideos) * 100;
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = `${Math.min(progressPercentage, 100)}%`; // Ensures the progress doesn't exceed 100%
}

// Function to update the statuses of video items based on progress
function updateVideoStatuses() {
    for (let i = 1; i <= totalVideos; i++) {
        const statusText = document.getElementById(`status${i}`);
        if (completedVideos >= i) {
            statusText.innerHTML = '<span class="completed-status">Completed</span>';
        }
    }
}
function toggleText() {
            const extraText = document.getElementById('extra-text');
            const toggleButton = extraText.nextElementSibling;
    
            if (extraText.style.display === 'none') {
                extraText.style.display = 'inline';
                toggleButton.textContent = 'Show Less';
            } else {
                extraText.style.display = 'none';
                toggleButton.textContent = 'Show More';
            }
        }