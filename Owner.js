
function saveBankDetails() {
    const existingDetails = localStorage.getItem('bankDetails');
    if (existingDetails) {
        alert('Bank details already set! Contact admin to change.');
        return;
    }
    const bankName = document.getElementById('bankName').value;
    const accountNumber = document.getElementById('accountNumber').value;
    if (!bankName || !accountNumber) {
        alert('Please enter both bank name and account number.');
        return;
    }
    const bankDetails = { bankName, accountNumber };
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(bankDetails), 'secret-key').toString();
    localStorage.setItem('bankDetails', encrypted);
    alert('Bank details saved securely!');
}


function uploadVideo() {
    const videoUrl = document.getElementById('videoUrl').value;
    const category = document.getElementById('category').value;
    const accessType = document.getElementById('accessType').value;
    if (!videoUrl) {
        alert('Please enter a valid video URL.');
        return;
    }
    let videos = JSON.parse(localStorage.getItem('videos')) || [];
    videos.push({ url: videoUrl, category, accessType, id: Date.now() });
    localStorage.setItem('videos', JSON.stringify(videos));
    alert('Video uploaded!');
}
