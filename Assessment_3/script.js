function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genders = document.querySelectorAll('.gender:checked');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    if (genders.length === 0 || firstName.length===0 || lastName.length===0 || dob.length===0 || country.length===0
     || profession.length===0 || email.length ===0 || mobile.length===0) {
      alert("Please select all fields.");
      return;
    }

    const genderValues = Array.from(genders).map(gender => gender.value);

    const popupList = document.getElementById('popup-list');
    popupList.innerHTML = '';
    popupList.innerHTML += `<li><strong>First Name:</strong> ${firstName}</li>`;
    popupList.innerHTML += `<li><strong>Last Name:</strong> ${lastName}</li>`;
    popupList.innerHTML += `<li><strong>Date of Birth:</strong> ${dob}</li>`;
    popupList.innerHTML += `<li><strong>Country:</strong> ${country}</li>`;
    popupList.innerHTML += `<li><strong>Gender:</strong> ${genderValues.join(', ')}</li>`;
    popupList.innerHTML += `<li><strong>Profession:</strong> ${profession}</li>`;
    popupList.innerHTML += `<li><strong>Email:</strong> ${email}</li>`;
    popupList.innerHTML += `<li><strong>Mobile Number:</strong> ${mobile}</li>`;

    const popup = document.getElementById('popup');
    popup.style.display = 'block';

    // Reset the form
    resetForm();
  }

  function resetForm() {
    document.getElementById('surveyForm').reset();
  }

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }