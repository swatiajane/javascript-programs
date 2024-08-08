function interviewCheck(gradScore, hscScore, sscScore, candidateName) {
      var result = gradScore >= 70 || hscScore >= 80 || sscScore >= 90
      ? `congrats ${candidateName} you are eligile for tcs interview`
      : `unfortunatly ${candidateName} are not eligile for tcs interview`;
      console.log(result);
}
interviewCheck(80, 86, 90, " Ruhi");
interviewCheck(70, 65, 55, "Aishu");
interviewCheck(60, 79, 88, "Anjali");
