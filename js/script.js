function initModal(){

const openModal = document.querySelector('[data-modal="open"]');
const closeModal = document.querySelector('[data-modal="close"]');
const modalContainer = document.querySelector('[data-modal=container]');
const submitButton = document.querySelector(".submit-button");

if(modalContainer && openModal && closeModal){
  function toggleClick(e){
    e.preventDefault();
    modalContainer.classList.toggle("ativo");
  }
  
  function outsideClick(e){
    
    if(e.target === this){
      toggleClick(e);
    }
  }

  function preventSubmit(e){
    e.preventDefault();
    alert("This is just an example of modal");
  }
  
  openModal.addEventListener("click", toggleClick);
  closeModal.addEventListener("click", toggleClick);  
  modalContainer.addEventListener("click", outsideClick);
  submitButton.addEventListener("click",preventSubmit);
}
}



initModal();