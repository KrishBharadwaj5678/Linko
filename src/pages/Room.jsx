import react from "react";
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt";
import {useParams} from "react-router-dom"

let RoomPage=()=>{

  let {roomid}=useParams();

  let myMeeting = async () => {
     const appID = 1851023606;

     const serverSecret = "b3fff97374380ff422a870f87895512c";

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
