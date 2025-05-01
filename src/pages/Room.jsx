import react from "react";
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt";
import {useParams} from "react-router-dom"

let RoomPage=()=>{

  let {roomid}=useParams();

  let myMeeting = async () => {
     const appID = 2010636801;

     const serverSecret = "8eab056ade4155073130ca52ef48398e";

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
