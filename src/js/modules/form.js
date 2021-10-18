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
            spinner: "./icons/loading.gif",
            ok: "./icons/ok.png",
            fail: "Что-то пошло не так(😞"
        };

       const clearInput = () => {
           input.forEach(item => {
               item.value = '';
           });
        }
        form.forEach(item => {
            
            item.addEventListener('submit', (e) => {
                e.preventDefault();

                let statusMessage = document.createElement('div');
                    statusMessage.classList.add('status');
                    item.appendChild(statusMessage);

                let statusImg = document.createElement('img');   
                    statusImg.setAttribute('src', message.spinner);
                    statusMessage.appendChild(statusImg);

                const formData = new FormData(item);

                postData('../send.php', formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                })
                .catch(() => {
                    statusMessage.style.width = '200px';
                    statusMessage.textContent = `${message.fail}`;
                })
                .finally(() => {
                    clearInput();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 7000);
                });

            });
        });
   } 
  

   export default forms;