// Button Status
const buttonStatus = document.querySelectorAll("[button-status]");

buttonStatus.forEach(button => {
  button.addEventListener('click', () => {
    let url = new URL(window.location.href);
    const status = button.getAttribute("button-status");
    if (status) {
      url.searchParams.set("status", status);
    } else {
      url.searchParams.delete("status");
    }
    window.location.href = url;
  });
});
// End Button Status

// Form search
const formSearh = document.querySelector("#form-search");
if(formSearh){
  formSearh.addEventListener('submit', (e) => {
  e.preventDefault();
  let url = new URL(window.location.href);
  const keyword = e.target.elements.keyword.value;
  console.log(keyword);
  if (keyword) {
    url.searchParams.set("keyword", keyword);
  } else {
    url.searchParams.delete("keyword");
  }
  window.location.href = url;
});
}
// End Form search

// Pagination
const buttonPagination = document.querySelectorAll("[button-pagination]");
buttonPagination.forEach(button => {
  button.addEventListener('click', () => {
    let url = new URL(window.location.href);
    const page = button.getAttribute("button-pagination");
    url.searchParams.set('page', page);
    // console.log(url);
    window.location.href = url;
  });
});
// End Pagination

// Checkbox Multi

const checkboxMulti = document.querySelector("[checkbox-multi]");
if (checkboxMulti) {
  const inputCheckAll = checkboxMulti.querySelector("input[name='checkall']");
  const inputsId = checkboxMulti.querySelectorAll("input[name='id']");
  inputCheckAll.addEventListener('click', () => {
    if (inputCheckAll.checked) {
      inputsId.forEach(input => (input.checked = true));
      // console.log(inputsId);
    } else {
      inputsId.forEach(input => (input.checked = false));
      // console.log(inputsId);
    }
  });

  inputsId.forEach(input => {
    input.addEventListener('click', () => {
      const countChecked = checkboxMulti.querySelectorAll("input[name='id']:checked").length;
      if (countChecked == inputsId.length) {
        inputCheckAll.checked = true;
      } else {
        inputCheckAll.checked = false;
      }
    });
  });
}

// End Checkbox Multi

// Form Change Multi
const formChangeMulti = document.querySelector("[form-change-multi]");
if (formChangeMulti) {
  formChangeMulti.addEventListener('submit', (e) => {
    e.preventDefault();
    const checkboxMulti = document.querySelector("[checkbox-multi]");
    const inputsChecked = checkboxMulti.querySelectorAll("input[name='id']:checked");
    const typeChange = e.target.elements.type.value;
    // console.log(typeChange);
    if (typeChange == "delete-all") {
      const isConfirm = confirm("Bạn có chắc muốn xoá các sản phẩm này không?");
      if (!isConfirm) {
        return;
      }
    }

    if (inputsChecked.length > 0) {
      let ids = [];
      const inputIds = formChangeMulti.querySelector("input[name='ids']");
      inputsChecked.forEach(input => {
        const id = input.value;
        if (typeChange == "change-position") {
          const position = input.closest("tr").querySelector("input[name='position']").value;
          // console.log(position);
          ids.push(`${id}-${position}`);
        } else {
          ids.push(id);
        }
      });

      inputIds.value = ids.join(", ");
      // console.log(inputIds.value);
      formChangeMulti.submit();
    } else {
      alert("Vui lòng chọn ít nhất một bản ghi!");
    }
  });
}
// End Form Change Multi

// Show Alert
const showAlert = document.querySelector("[show-alert]");
if (showAlert) {
  const dataTime = parseInt(showAlert.getAttribute("data-time"));

  const closeAlert = showAlert.querySelector("[close-alert]");

  setTimeout(() => {
    showAlert.classList.add("alert-hidden");
  }, dataTime);

  closeAlert.addEventListener('click', () => {
    showAlert.classList.add("alert-hidden");
  });
}
// End Show Alert

// Upload Image
const uploadImage = document.querySelector("[upload-image]");
if(uploadImage){
  const uploadImageInput = document.querySelector("[upload-image-input]");
  const uploadImagePreview = document.querySelector("[upload-image-preview]");
  const btnDelPreImg = document.querySelector("[btn-del-pre-img]");
  const boxPreviewImage = document.querySelector("[box-preview-image]");
  const imgPreSrc = uploadImagePreview.getAttribute("src");
  console.log(imgPreSrc);

  if(imgPreSrc){
    boxPreviewImage.classList.remove("hidden");
  }

  uploadImageInput.addEventListener('change', (e) =>{
    const file = e.target.files[0];
    console.log(uploadImageInput.value);
    if(file){
      uploadImagePreview.src = URL.createObjectURL(file);
      boxPreviewImage.classList.remove("hidden");
    }
  });

  btnDelPreImg.addEventListener('click', (e) =>{
    // e.preventDefault();
    uploadImageInput.value = "";
    uploadImagePreview.src = "";
    boxPreviewImage.classList.add("hidden");
  });
}
// End Upload Image