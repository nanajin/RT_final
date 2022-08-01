import React from "react";
import ChallengeList from "./ChallengeList";
//챌린지 유저 페이지
function ChallengeUserPage(){
  return(
    <>
      <ChallengeList api='board'/>
    </>
  )
}
export default ChallengeUserPage;