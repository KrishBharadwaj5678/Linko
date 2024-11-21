import react from "react";
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt";
import {useParams} from "react-router-dom"

let RoomPage=()=>{

  let {roomid}=useParams();

  let myMeeting = async () => {
     const appID = 144149633;

     const serverSecret = "d46218ef541c67c98d1528ef638a1730";

     const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomid, Date.now().toString() , "Alex");

     const zp = ZegoUIKitPrebuilt.create(kitToken);
  zp.joinRoom({
    containerID: roomid,
    scenario: {
      mode: ZegoUIKitPrebuilt.VideoConference
    },
  });

  }

  return(
    <>
        <div ref={myMeeting}></div>
    </>
  )
}

export default RoomPage;