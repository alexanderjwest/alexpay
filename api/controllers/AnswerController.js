/**
 * AnswerController
 *
 * @description :: Server-side logic for managing answers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

function isValidReceipt(receipt){
    if (receipt){
        return true
    }
    return false
}

function answerIt(req,res){
    if(req.params.letter == q && isValidReceipt(req.body.receipt)){
        return res.send(200, {answer: 'r'})
    }
}
module.exports = {
	answer: answerIt
};

