// Function to set the rules in Hindi
function setHindiRules() {
    document.getElementById('rules').innerHTML = `
        <p>नियम 1: कृपया दिशा-निर्देशों का पालन करें और किसी भी असामान्यता की रिपोर्ट करें।</p>
        <p>नियम 2: सुनिश्चित करें कि आप अपने कार्य समय पर पूरा करें और समय सीमा का पालन करें।</p>
        <p>नियम 3: सभी टीम सदस्यों का सम्मान करें और एक सकारात्मक कार्य वातावरण बनाए रखें।</p>
        <p>नियम 4: किसी भी तकनीकी समस्या की रिपोर्ट तुरंत संबंधित विभाग को करें।</p>
        <p>नियम 5: सभी डिवाइस और उपकरणों का सही तरीके से उपयोग करें और उन्हें सुरक्षित रखें।</p>
        <p>नियम 6: गोपनीयता बनाए रखें और किसी भी व्यक्तिगत जानकारी को सार्वजनिक न करें।</p>
        <p>नियम 7: समय पर ब्रेक लें और काम के दौरान नियमित रूप से आराम करें।</p>
        <p>नियम 8: सभी दस्तावेजों और डेटा को सुरक्षित तरीके से संभालें।</p>
        <p>नियम 9: अपनी प्रतिक्रिया और सुझाव टीम के साथ साझा करें ताकि सुधार हो सके।</p>
        <p>नियम 10: नियमों और नीतियों का पालन करना सभी कर्मचारियों की जिम्मेदारी है।</p>
    `;
}

// Function to set the rules in English
function setEnglishRules() {
    document.getElementById('rules').innerHTML = `
        <p>Rule 1: Please follow the guidelines and report any discrepancies immediately.</p>
        <p>Rule 2: Ensure to complete your tasks on time and adhere to deadlines.</p>
        <p>Rule 3: Respect all team members and maintain a positive working environment.</p>
        <p>Rule 4: Report any technical issues promptly to the relevant department.</p>
        <p>Rule 5: Use all devices and equipment correctly and keep them secure.</p>
        <p>Rule 6: Maintain confidentiality and do not disclose any personal information.</p>
        <p>Rule 7: Take breaks on time and rest regularly during work.</p>
        <p>Rule 8: Handle all documents and data securely.</p>
        <p>Rule 9: Share your feedback and suggestions with the team for improvements.</p>
        <p>Rule 10: Adhering to rules and policies is the responsibility of all employees.</p>
    `;
}

// Set English rules by default when the page loads
window.onload = function() {
    setEnglishRules();
};

// Add event listeners for language buttons
document.getElementById('hindi-btn').addEventListener('click', setHindiRules);
document.getElementById('english-btn').addEventListener('click', setEnglishRules);


