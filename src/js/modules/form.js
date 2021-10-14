   function forms() {
        const form = document.querySelectorAll('form'),
              input = document.querySelectorAll('input');

              const  postData = async (url, data) => {
                let res = await fetch(url, {
                    method: "POST",
                    body: data
                });
                return await res.text();
            };
              

        const message = {
            spinner: '../icons/loading.gif',
            ok: '../icons/ok.png',
            fail: '../icons/error.jpg'
        };

       const clearInput = () => {
           input.forEach(item => {
               item.value = '';
           });
        }
           console.log(form);
        form.forEach(item => {
            
            item.addEventListener('submit', (e) => {
                e.preventDefault();

                let statusMessage = document.createElement('div');
                    statusMessage.classList.add('status');
                    item.appendChild(statusMessage);

                let statusImg = document.createElement('img');   
                    statusImg.setAttribute('src', message.spinner);
                    statusMessage.appendChild(statusImg);
    
                // let textMessage = document.createElement('div');
                //     textMessage.textContent = message.loading;
                //     statusMessage.appendChild(textMessage);

                const formData = new FormData(item);

                postData('../send.php', formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                })
                .finally(() => {
                    clearInput();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });

            });
        });
   } 
  

   export default forms;