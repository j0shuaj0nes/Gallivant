const data = {
    option1Checked: true,   // Set to true or false based on your requirement
    option2Checked: false  // Set to true or false based on your requirement
};

const html = template(data);
document.body.innerHTML = html;