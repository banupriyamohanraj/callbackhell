var div = document.createElement('div')
            div.setAttribute('class','mydiv')
            var content = document.createElement('h1')
            content.id='display'
            div.appendChild(content)
            document.body.appendChild(div)
            setTimeout(()=>{
                display.innerHTML='10'
                setTimeout(()=>{
                    display.innerHTML='9'
                    setTimeout(()=>{
                        display.innerHTML='8'
                        setTimeout(()=>{
                            display.innerHTML='7'
                            setTimeout(()=>{
                                display.innerHTML='6'
                                setTimeout(()=>{
                                    display.innerHTML='5'
                                    setTimeout(()=>{
                                        display.innerHTML='4'
                                        setTimeout(()=>{
                                            display.innerHTML='3'
                                            setTimeout(()=>{
                                                display.innerHTML='2'
                                                setTimeout(()=>{
                                                    display.innerHTML='1'
                                                    setTimeout(()=>{
                                                        display.innerHTML='HAPPY INDEPENDENCE DAY'
                                                    },1000)
                                                },1000)
                                            },1000)
                                        },1000)
                                    },1000)
                                 },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)