function Quiz(questions) {
	this.score=0;
	this.questions= questions;
    this.questionIndex=0;
	// body...
}
Quiz.prototype.getQuestionIndex=function(){
	return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function() {
	return this.questions.length===this.questionIndex;
	// body...
};

Quiz.prototype.guess= function(answer){
     if(this.getQuestionIndex().correctAnswer(answer)){
     	this.score++;
     }

     this.questionIndex++;
}