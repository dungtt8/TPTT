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