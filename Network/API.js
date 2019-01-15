const URL = "https://vnexpress.net/"
export function SigIn(phone, password){
    return fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            phoneNumber: phone,
            password: password,
          }),
        })
        .then(res =>
            res
        )
        .catch(err => {
            console.error(err)
        });
}

export function RegisterGame(userID){
    return fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userID: userID,
          }),
        })
        .then(res =>
            res
        )
        .catch(err => {
            console.error(err)
        });
    }

export function GetQuestion(){
    return fetch(URL,{
        method:'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
        })
        .then(res => {
            res = {
                score: "0",
                stt:"1",
                question:'Cristiano Ronaldo da danh bao nhieu qua bong vang?',
                a: 4,
                b: 5,
            }
            return res
        })
        .catch(err => {
            console.error(err)
        });
    }

export function SendAnswer(userID,answer){
    return fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userID: userID,
            answer: answer,
          }),
        })
        .then(res =>
            {
                res = {
                    score: "35",
                    stt:'2',
                    question:'Ai la cau thu xuat sac nhat the gioi?',
                    a: "Cristiano Ronaldo",
                    b: "Leonel Messi",
                }
                return res
            }
        )
        .catch(err => {
            console.error(err)
        });
    }

    export function GetRanking(){
        return fetch(URL,{
            method:'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              }
            })
            .then(res => {
                res = [
                    {
                        name: "alizabez",
                        score:1900,
                        avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
                        index:1
                    },
                    {
                        name: "alizabertz",
                        score:1800,
                        avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
                        index:2
                    },
                    {
                        name: "alizaghfjbez",
                        score:1700,
                        avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
                        index:3
                    },
                    {
                        name: "alifytjzabez",
                        score:1600,
                        avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
                        index:4
                    },
                    {
                        name: "aligtjgzabez",
                        score:1500,
                        avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
                        index:5
                    },
                    {
                        name: "alizabefjygz",
                        score:1400,
                        avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
                        index:6
                    },
                    {
                        name: "alirthzabez",
                        score:1300,
                        avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
                        index:7
                    },
                    {
                        name: "alizanghbez",
                        score:1200,
                        avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
                        index:8
                    },
                    {
                        name: "aliehtrzabez",
                        score:1100,
                        avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
                        index:9
                    },
                    {
                        name: "alwgizabez",
                        score:1000,
                        avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
                        index:10
                    }
                ]
                
                return res
            })
            .catch(err => {
                console.error(err)
            });
        }

    export function GetUserRanking(userID){
        return fetch(URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                userID: userID,
              }),
            })
            .then(res =>{
                    res = {
                        name: "DungTT",
                        avatar:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExIVFRUVFRUVFRUVFRUVFRUVFRUWFhYVFRUYHSggGBolHRUVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGi0lHx4tKy0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS03N//AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAIEBQYBBwj/xABCEAACAQIEAwUGAgYJBAMAAAABAgADEQQSITEFQVETImFxgQYykaGx0ULBI1JicoLwFBUzU5KissLhB0PS8RZzg//EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAAmEQACAgEEAgIDAAMAAAAAAAAAAQIRAwQSITFBUSJxBRMyFDOR/9oADAMBAAIRAxEAPwCTXWDSSsQsjqJnj0QQdIZINRDBYAdnCJ0CN5iBEdaMy94QtpGpvqbna8YEsCLLG4VswvtDkRAByzhWFInLQEMAnCNYS0RgANlnCsIZwxDB20kWkNT5yxwmGaoWClQRYgNfW/iPtO/1JXBvZT5N9xKpanFF7ZPknGL7QOjw9+yFYHMCWJXmFDEAjrtcwVxa99Os0/DcO1NFQ8kUfxAd6cHDKQftMuu9vw3626znR/IbZNS5XgteMq8JwdnUs5K3HdXY35M32+MgkddCND4EaGa6RP6tp5zUIuSb2Pug9bdZDHr5KTchvHxwUNDAVKhDKMqi/ebnp+Ec5Fo6qD1AM2czeG4PWsAQq20uTm9co+8vwa/c25ukQlj9EW0FXNheWHEOGinTuajFmIVbAAX3JtqdgecrsWO7NuLNHKriVuLT5O9poIa8iKTaSBsPKWiZyoIPaFYc4MSQIcIsSdJxTHVRcRDIU7H2nIxkuvT0kJVlsyaSvddZGJFDgIVYIQgMYxtYmxtG4dr77x7rcETlGmRATCv1laNx6y0tdTKwrqPX6RoETsG2tusmESFgV1k8iJgwdpwiPtOmIiDtOMIS05aIBlo1oQiNpJmcJcLcXDNsfAdT4RSkoq2NLwDWtkYN038jv9/SabC18w194b/eAwfDKaa++36x5eQ2EmFBe/PrOHrM8MsvijXji4qmOiiimImKKKKACiiigBWcWwVSoylcpCg90kg3JGt9thKTiNJkU5kYeNrj4jSaurUtyJPQCVXE+INTF2OW+yCxZvsPGbtLqckKjFWiEsafJQpYiHVdpHRyzFmsC3IaAeXXzkomdxN1yZZdjWPKMcAR5gzJCQlMeDBiPEB2RX3MU6+5nIBZc2kPFJYycZFxa6xICNHgRgji0Yxyx8YgnVfUiBEc+xkXJt6ybygKvL1+kEM7hBrJhMBhhb1kjLATGidInVWciENiMdOXiAbG1QCLEC3O8cZCxDsWy9mxUAEm4AY8l6266RN0hpWyVw1HY2UnKfdvuBzN+k0tCnlUC9/EzCcU9pRhWUVCFDXNlLFrDpYdbD1lfT/6hU3LZs1Omg7o3qVWN+Q2At15zl5dJmyu1Hg374UluPRa2OUGw1N7aSUTMTwHj1PE9+nc5bFgRazbhb8/SW39NLPcsCVIOW+w8plnppRdeizYmuGaCKcU3F44zIVM5FFETABSt4nwdKxzXKvYDMNbgbAg8pLpYhWuux2IMpeMUqilcjWRrgtqxDdBy25y/DGW9U6YNKvkQsRgHo6uBlv74Pd9ekewgaVK57xLHqxv8BsPSSSJ6DGppfN2zHKr4A5YwrDkRhWWEQIEeIrTogBGcaxQrLrORgWYMBiN4ZILEDWICK0aJ14xZIYZI+CQwgMQhwjao29fpHrGOdR6/SCAdQkoCR6AkpRAQ3LFlhLRWkQAkTloS05aAAmsASTYDUmefe0ftlUzFaJyrsGsMx8ddhL7244oKdLsgbM+reCD7medYTA1cS+Wmhc31sNFHidhNmDFHbvkQcuaR3DUcVjqlgWqMAT3m0A56nQSPkamxVl1GhUjUT1j2Y4RSw9Kw1sAzlh77MbKLdNDYeULxTgGHxgzunZuquC6rkPdK5dOfvSta3a26+JrekuHfJhOHe0HZUOyw4s7ktUe3u8gFHM2Ev8A2Y9mDWpiuztd2bUOQwUfjvuSTfntKDjPsniMP3ipt+uov/jHI/KejeyFek1BOyUWCorm4uSE1uOWs07cdOce5FPzTqXgJV4PjsPlWjje0FgctVA1geV9/nOJxfiFM2qYanUHVGZD8CCPnNFimu59PoJTcY4ouHHWo/uoT6X8BMc9Hhyf1FFlsEntgo0qYbEIfBVcelj+UhYz2spsblayAbXo1NPEkC0Dw3imJqEZXRmYEhGUBbA2Niputrg2O8t+N4rs6HeIzMADbbxsOkoX4zAnasnHLJEbBcQFdFqqfeF+Y1Gh9Y845WzJnGtwQdDmHMeI8JmeE41xUr00H6NVBD7gVSCba73/ACl3gRmLhgLhrEW01UG48DMstJtm16L5Z1ssfhjfca3sfMbyVljKOHCk2G5v8radJIyzWjC+xoSLs48COMYiGVjLSQRBWgAO0UdaKMRIVoKs06TAutz5QQwbxghWg4wHLH3g1jxAAqzlQaj1+k6IGpV/SKvgSYICTRMmASLQElwBnAJ0jSdiiEDHOR8aagQ9mAX2GY2UeJ+0dicfRp+/VRfNgD8JXVfanCL/AN4HyVj9BJKEn0hWkVH/AMLWqxqYmq9Rjq2Xui/nvaaOnwZKOFZk7gC3FJBa6tor1Kg1G5byg+EccweIYqa6IBYBXzU+0PQsRYL8z4TdUcGHBU96nbW21UsNSbfgAsAJdtk18icEuzDYSmzI6gDMUpMAOikhsvjZvnJnC8FmSm4JH6RnZTfbUZdehVfhH4/hOIp1SaKXVRmQLa9MG/ccse8LW0HISRwvGtUDAqqspGx7rBhfMNLjnMcYuKcWdOMlJcBuJs4pkpTWo1wLMSBYmxJIBOkwXE+F11xLIuDelUuLVcM7LmuL3IICsBre83NWubFS1K50sC19fLWWVLFVQoHaE2AFyFJ+Npbjmo9kMkZS6POsJxXiKtkulYi4K1V7OoCORt4ag84/G8SaoQcRw2pmGgZGuR5ETV8SwDVmzG2YHSpcK41uLZVA9NYZcETbtT2mXVeQJt+JRoTfnJ/vZBadGQwHGMNhszDC4lCRYuyFj5XvIPEeMYjEHPRoVCouAWCgW218bzS0+CJWrdrWxT5c13w603yDLoFVgNdtd+ckYjBYdHvQpdmHAZhly6KTl7vK5JPXSWftpXwVSx1dlNwHhBp0DTqatUJZ7dW5X6y6ppb4TtxePWUSk5O2ZhijUwlolXedKyIDJ1hEYuUAAEQZEkMIwiAEYiKGyxRiIzVe8FnW3nEXW8cwgSOEaQRh4FhGI4I9Y0R4EQBVEiBf0gPifpJyCRbWYE6amNAiwoiSAJXf06wsq3Pj/wCI1+NoNqdetdBextexCADxIufS8qeWN0aIaTJJW1SHY3HAa5giD8XNj+zfYeMra2JpVFKsa9jvY1Pqssm9liO8GUv45zp0DFtJHGDJ0zWI0I1BB6HvTPllPs6mDDjS21ZQYj2WouM1GoQej7E+NxcTN4/h9WibVEK9Dup8jPQXSpT1vmXmDr9dR5yTZKqEEBlOhBF/QzRp/wAjlxd8ohn/ABuLL1wzyuaf2R9s62CbKSXonQoTfJ+0nQjpsYXjHsna7UD/APmf9p/IzK1KZUlWBBG4OhHpO5h1GLUx4/4cPPpsumfPXs+kuHY5awV6bBqeUEP+sW2+HPzmfr8L7GqaqsWpVAyttZGzEgafh1I8LTJ/9JPaIIWwdRrK13pX5MBd19RqPIz1GibJdgFFibcgvIH0mLLi2vay/Fl4UkZkUGPPIvIJYEjxb7fGShO4un2bCwORwWGn9nqNGty70icSNUJ+iALXG/TnbxmNxp0dCM01aJUDUrixswuAeY3A5wOErMUGcgHYhgVJ8bgERqIjMR2YsLMWBGUnkNNzpBxaJKSZJqVQBcjlfxA5n0lH2hYl73zHQ/sjRfl9ZI4vXLFAqtkuQ1Qba3GQeB6wNoJGTU5L+I9RCCNWPgZDotOTkUYhNGMYSNK6QAGTGO4GpjmMquKVb2UHxNom6BsO3ERyBMUgiKVb2Q3MsaI0hCs7h10hGWXFgG0C4krLpAOIADWFUbRqrDKu0BA6lQqQfwjfqT0E5R4XUr/par9nSAuqL71urE6CKjTNVtNSTlH7KXsxPS9j8peYYg0mHTOpHSxP5WkN12jo4sG1KT7YKnwSkBoX/wAbSRgaaJdF0C25k7je51J8TC0r5BffKL+dpB4ZVLtnIt3QjDncKrA/5jEkl0abbLOQ8dgVfvA5WGzfkw5iTIyqbA/zpBq+xLh8GeNwSrCzDl1H6w6iV9ZexbOPcPvAa/z4fCXdJRXUodHRiEYbi23mLEXEhEXzI4sRoy/mPDpMmTHsdro2Y8m7h9j1YEXBuDqD4Sk9qODismdR+kQXH7Q5r9pJwzmmxotsblG8+X885LwdfMviNDIY5vHJTj4J5IRyRcZeTzChWZGDqSrKQynmGU3B+M929k/aFcfh1ckBk0rr+0Bp/Cd/S08o9ruEdm3bIO457w/VY/kfrIfstxk4TEJUJPZkgVlH46d7kHy3npozWpxKa7PLZMctNlcH0fQGIwq1AbnRlC/wk3I9dpn6lCpRvmX9GW7pGpXOzWS25AAUXl9h66hGqlwwbv3Goy/hC+lvUxtHEB8odbMH06BlTMT5DNbzmOUU+DTCbi7RlMXxDDaOagJGwVjc+g/9R2MxgUjtWCqRmyBgBl6ux32OgkHFFXeowAys7kaC2W/52v6yu4UtxUdtmdst9ctNdAB0GhNvGc556bVdHU/Q5JO6s0eHQ1qFXNTbKiB0c3AdsoYFLcgbj0kECTsfjzSwlDD6h6qi9vw0yb28yNPjIqrNT6RycvEqFadtOkR6iRKiPUezC+x+sLaMPefyh1WADLRhEWMxC0xdvSVWI4zuFXXqYrIjuJYgrYDS/P8AKVbG287xDGM6i426SnxeMY2EVbiL5LoNFM9/TX6xQ/UKj0DDrHusdhlhaq7SwsZHtIzrrJ2SAdIAARYbD0M7hOXvN+6Da3qY6lTncJWyVSTscqX8e81j8REW4Y7ppMJSr2oVCFANJ2FgLe43QeEmYBRdmGz2a3Q2sfyhGwoIqD+8vf1UL+Uj8Ge6W5jQjoRoR8RIHURPI0kDhIH6T/7L/wCRPtLCVtF8ld05OFYeex/KAFlG1fdPkfpHThEAMxwfFZq1UD8DqGPK+unnlyn1l1Uw610D7NbusN7X08x4SppIEatsO/mJ8ci6n4Sz4ED2QvudbdBbQfC0claDlFNjsJnUo2jKd9rNyI8DpKfh+JZXObcHK/3mt4xRsVqDn3G+ZU+hv8ZleJU8tUkfit8SCR/paYpR2ya9muMt0bLbEU0qq1NtQRZh57Tzji3Dmw9Qo2o3Vv1lm64dXvUf9rb+EAfeE4zwtMQmVtCNVbmD9pfo9S9Pk56fZTrNN/kY+O10VX/T725XDE4bEsct17JzqoXQBDbYA7Gek8Rxi0qBcMMxUot9y9VtW/P0ngnGeEPTfI4s3I8mHUSz9nOJYlwaDuXSnZkVidL3XRuluU6uoS2PJDpnGwJ/sWOa5NvxOrkpEC1zZF8zoJLwFFLpTYgIBmf9xe8xPgdvWY3HNUL0tgA1yCSeij0u3ylTxypXWoyGowRkW6jQMu9j4XnK0+neSaj75OvqNQscG/XBreHcfONxNWofd7QGmOlKxCj5X9ZqlWecewX9sw5Zf92k9LRZv1GPbOjhRluVg8usJlnWWOAlNDGhfCR8RjUQ2Y6/TzkbjWNamAF0JvrM/cnUm553kZOiLZM4viM1S1+6Bp015yEZxlvzjb9ZW+SI8vYSpxOGJuwFvCWop31v6TuXrtBSoLKpMKLRS5FETkf7R2avCrDukZRqKBqQDOV8YikAnfpyl1omzoSCZNZKWxFxGlY6ERHuBcC5uAPMmw+slVsAOyyA6+9m5l/1oLE90B7XCMGI8NQfhe/pJXallzJy1y/rDp9pCfBt0iVNhMK5Ki+40PnKtqnZVy34XazeDHZvXb4S0oOrAOuzD+b+MgcXw+YHlmG/QjYyBtLSVnGFtkqj8Js37raX+NjD8LxXaUwTuNGHQjQ/OSa1MMpU7EEH1gAqT3APWPvKPBYplBpk95TY+PRh5j53j2cncmOhlFj2rtjhTsBQcGq7DdsgC9meguQfGa/CJZfPl0EpFa9S42QWP7zW09APnLmjigVJOlt4MVETjdcDKnU5j4Bf+T8pk+NYgZxbXRWv1sKgsPUj4x+NxrVXZydCe6OijQff1lQDmqli3dQWA8Sd/Sx+Myz5lZoj8Y0XHBsOdCfwjU+J3+ss6eIDNZdQNz9pRtiWYWUZV8dL+NucusBSyoOp1Momi+HpDOKcOp4hClQaciPeU9VPKZzgnC2wrVDUs+pRTsMuhv5/aa+ApAEuCBYP/tU/nJQzTjFwT4Yp4YSkpNcozWHK1cUWFMlaQta+mY2PyP0mc4pUq1qjVuzbKz5FNiQOSi/p85tuCWC4gj+9qX9BJeIojskGwU0zppsy3mnFqXhlaXgy5dMs0KbK32X4UtGpl3cKoc30vYNYDp3hNnTMzHsy13Zj+sV16oAh+aGadDNKlKa3SOPmUYzaj0hzTonCY5ZNIqKvj1FTTLH3h7p8Zmqd7amaXj2GdlBXYbjrMji3qIbspAO1+crnFtkGOfEi9o6nVFwDKqu7XzKDby0+MVHGC/fFx9ItnAbTQcox9doDDY8NoB/6hncDnKmhUHp7CKRTjVHWKRpgWRcneNUwdOpePIkeRBRWZbWJ0lxwnEl7hje3OULLeSMBizRDAa3+UnjlT5BM1CpI3D6WRig/DsOqH3SPLUekz6Y6pcXc6GXmALVUD3s4JAa17g8iOYmlSWT4o0YcuyVj6b9lVKn3HNx+y55eR+vnJWMS6nw1kLGsGXLUXK22vusP2W/LeKhj8gy1LlQNH306MPzlbi12dSMlJWiEGNJjUXY++v8AuA6y2XHoVDDW40lViMUialgBy6nyHOZ+txJQ7NkITkCzBSdyxUaaxNryWVZc4lu0bNTazAkM4sQBuVP635Qirm07QnwFh9JS8O4kM5zLame8pAOUMdwQd9r38ZMx/El/7fecbHZR5k7jwEN0Q2stKdMKLAWH5nnIvFq2Wk1jq3dHmdPkLmVdbiVVuYT9zW/q0rsZjLG7Mzv+EXufQcpCWVeCah7HV6gVfkP56QWDw4AzW1PXpsP58YPD0C/6Rze+y8gOh+0vOGYe5zHYbeczydFsVbC4HBbM3oJYRRTO3ZoSoUDRHefzB/ygflDQLaPf9YW9Rcj6n4QQyp4ZtiwP7x/mv/EtsQl6bD9k/SVeETLiMRSOnaqHX1Fj9flLKhUzJc7gEMOhGhEnPuyuHVD/AGfogAkfidm/xWf/AHGXirM9w5jTFNt1ypnA390DMOv/ABNGjAi4Nwdp0sE1KPHg4OsxShkbfkGwhaQg2kfiHEBQW9rk7CXoyE1hKLjGOwrEJUXOVPLl6yuxftJUY90BRKRnvrzg5+hWWvFeMK9E0adJVXSx/FpMlWp2Msyusa6A7yG4NwHD4my+PSSQjPbSw3vI5w45S0wj3G20rn7E2BGA/aikstFK9zFYqOHy87yQi+MeEnALStsiOBMi1sWoNjpJBMj4igG3AgqAbTxa8iDNP7M1SUY8r6efOZGtw9eRsfCTMHiqtNVQNYLtbn5y/G4xdkuDdVUDCzAEHcHUSg4lgWRu6ztTb8AOqWGtjuV8NxI+B41VDKGIK3sb76y/xLapp1+k0vbkiy3FllCVoxNSjTX+zII5WHLzgyo3sLiajF8HosS2UqTuVNvW214FfZynv2lT4p/4zE9NK+zqLX4/KM9OZxe25PIan4TUrwKgNwzebH6C0Zj8PTTsyqqvetoAN1I+tpF4GlbJR1sJSUUuzLYrDVunZg/iNmb0Gw9fhB0sOtO51J3LHVj6zUugIsdRKnF4MrqNR9POZlOzfLGVtA2JXke8vkd/n9ZY4PF5DbcSpxKFO8NQDe3Tr6GSqbhgCDcHUSTVkU6Zo0YEXGxjpV8NxNjlOx285ZO4G8oaovTtDoysmYW26HoRsY+KIkU/FFNqeJUd6kTmHVTo4kl6gBzD3aq3/iC3HxH0haFMMjA7Mz/AkiV3CrvhsttaZOXxy95fSxtLe4/RS+JfYbhWMutNb6ZB8bfaaDhLfogOhZfgxA+Uy1WjkysvuEApblpcCXPDsVkYh2AWpZkuQLNlGZfW1/jNGmklP7Metg5Y/ouHaZTjfEHc5SLBT6zTl72INx1EzPtE6Z9Pe/FN8ujhMo3MEz2iauCSJztJWIRxAAvGDFAyLiLEwSGx3k9pKi0NSJMYV2PmJF7cGCqaRUFFmuOHOKVV4otiCjUM9yAL6QpqdZDrMV1Eh16js3OZ1GyBchrzsjUHItfXqYStWABMjt5FQ53A5wWaRlxatpsRHPWUDeTURhqhNtJpeG8UFXKliCo+OkywfrLv2eoNftL929vOXYrQLsvahjgdpypEZdZMHiGme9pMVcdmp90q7W6qbhfleXtc7TIlSCytuCb+Ou/rKM0mo8GvSY1OfPguMBis4sdx8/GSiJnlNtRpJdLiLDex+s5konejPjkPi+H31X4faVFTCvSJIU5dyttvFftLylj0O+nntJIIPjEpNDcU+jOU6obUH7jz6GW+ExQcZW32843FYeixubK36y90/wDPrIZw4B7tUHpfQ/aO7IpOJJqF6J01Xlf6QeI4uQpIXXYa8zoJNoPnXK41+R8QZWYvh7doijUd5vhYD/VBJXyN3VoK/E1p0ToQVSw562sPnD8EKigD5s3rr9LSn4zw92yUtO+wv5AgfVh8JY1cA6gIGsGIXToNT8hJtJR+yCbcvoNiVy4YAjZU9DcSNxCof6OGXdGXnYjW2noZZ/0a4KsxYEW1mZ7N2JDHuqxFhsSpIuPPrIRRKTo0HB+6w6VA7HpdSoBA5XuT8Iz2lwPd7RQS19R4dY+g2WpQB5o6+vcIHyl5Vp5kIOmm86mm+cOTh66Kjl6PMzTa5a3nI7k3mrq0Lhha/wCcpv6uNwW0vymhwoypEahgXYXFrSI6WNjNFRphRYbQLcOViSefyhtHRQ2jXN5cY3AKq3ub/WU7SLQHb+MUbaKKhGsMYYopjKh6wWI2iijXYFJiNI1TtFFNBNEtDPQsGoFCnYW1G0UUlAS7JTzjRRRjIdeUnHB36Z5kNfxtteKKV5P5Zo0v+xECKKKc07ooWg5B0JHkYoopdDQbEOSNST6yJFFHHob7JfDGOa1zLCr/AGifuv8AVJ2KQl2TiQeIn9PQ/i/KTMT71P8AfP8Aoadijl/MSMf6kM4mxFNiCQbHbylNgxon8P5TkUI9BPtF5j/cPha3h3htLo+6fIzsU36Dycv8n/UTMnf1kTHcp2KdBnPQJIQTsUiMruMk3t4SlqbxRSMhMEYoopEif//Z',
                        score:10,
                        index:115
                    }
                    return res
                }
            
            )
            .catch(err => {
                console.error(err)
            });
    }

    export function GetRoom(){
        return(
            fetch(URL, {
                method :'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  }
            }).then(res => {
                res = [
                    {
                        RoomName: 'abc',
                        RoomID: '123556',
                        CreateTime: '15 Feb 2019 11:00:00',
                        Member: 5
                    },
                    {
                        RoomName: 'grt',
                        RoomID: '66783',
                        CreateTime: '15 Feb 2019 11:00:00',
                        Member: 5
                    },
                    {
                        RoomName: 'hjgy',
                        RoomID: '235',
                        CreateTime: '15 Feb 2019 11:00:00',
                        Member: 5
                    },
                    {
                        RoomName: 'fdvc sgf',
                        RoomID: '12456',
                        CreateTime: '15 Feb 2019 11:00:00',
                        Member: 5
                    },
                    {
                        RoomName: 'kui',
                        RoomID: '7894543',
                        CreateTime: '15 Feb 2019 11:00:00',
                        Member: 5
                    },
                ]
                return res
            })
        )
    }

    export function JoinRoom(roomID, roomPass){
        return fetch(URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                roomID: roomID,
                roomPass: roomPass
              }),
            })
            .then(res =>res
            
            )
            .catch(err => {
                console.error(err)
            });
    }