// Change Status
const buttonChangeStatus = document.querySelectorAll("[button-change-status]");
if(buttonChangeStatus.length){
  const formChangeStatus = document.querySelector("#form-change-status");
  const path = formChangeStatus.getAttribute("data-path");

  buttonChangeStatus.forEach(button =>{
    button.addEventListener('click', ()=>{
      const statusCurrent = button.getAttribute("data-status");
      const id = button.getAttribute("data-id");
      let statusChange = statusCurrent == "active" ? "inactive" : "active";

      const action = path + `/${statusChange}/${id}?_method=PATCH`;
      formChangeStatus.action = action;
      formChangeStatus.submit();
    });
  })
}
// End Change Status

// Delete Product
const buttonDelete = document.querySelectorAll("[button-delete]");
const formDelete = document.querySelector("#form-delete");
buttonDelete.forEach(button => {
  button.addEventListener('click', () =>{
    const isConfirm = confirm('Bạn có chắc muốn xoá sản phẩm không?');
    if(isConfirm){
      const id = button.getAttribute('data-id');
      const path = formDelete.getAttribute('data-path');
      const action = path + `/${id}?_method=DELETE`;
      formDelete.action = action;
      formDelete.submit();
    }
  });
});
// End Delete Product
