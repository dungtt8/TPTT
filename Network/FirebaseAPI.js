import { firebaseApp } from "../Util/firebase";


export function CreateRoomFB(roomInfo, RootUser){
    return firebaseApp.database().ref('Room/').push({
        roomID: roomInfo.roomID,
        roomName:roomInfo.roomName,
        startTime: roomInfo.timeStart,
        rootUser: RootUser,
        users:[RootUser],
        messages:[]
    }).then((data) => {
        var res = {
            roomID: roomInfo.roomID,
            roomName:roomInfo.roomName,
            startTime: roomInfo.timeStart,
            rootUser: RootUser,
            users:[RootUser],
        }
        return res
    }).catch((error) => {

    })
}

export function GetListRoom(callback){
    
    firebaseApp.database().ref('Room/').once('value', function (snapshot) {
        
        callback(snapshot.val())
    });
    
}

export function UpdateListRoom(list){
    firebaseApp.database().ref('Room/').update(list)
}

export function SendMessage(messages){
    firebaseApp.database().ref('Room/').push({
        messages
    }).then((data)=>{
        //success callback
        // console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        // console.log('error ' , error)
    })
}



export function readMessageData(callback) {
    firebaseApp.database().ref('Messages/').on('value', function (snapshot) {
        console.log(">>>>>>>>>>>>")
        // console.log(snapshot.val())
        result = snapshot.val()
        callback(result)
    });
}