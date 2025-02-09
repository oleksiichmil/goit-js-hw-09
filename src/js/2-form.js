const STORAGE_KEY = 'feedback-form-state';


let formData = {
    email: '',
    message: ''
};

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name = "email"]');
const messageInput = document.querySelector('[name = "message"]');

const saveToLocalStorage = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const updateFormData = event => {
 
  formData[event.target.name] = event.target.value.trim();
  saveToLocalStorage();
};


emailInput.addEventListener('input', updateFormData);
messageInput.addEventListener('input', updateFormData);

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  emailInput.value = formData.email;
  messageInput.value = formData.message;
}


form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields!');
    return;
  }

  console.log('Form submitted:', formData);

 
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
