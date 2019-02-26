
function updateMotivation (user) {

}

function updateFidelity (user) {
    if (user.numberChats === undefined || user.numberChats===null || user.numberChats.length === 0) {
        return 0
    } else {
        var score = 0;
        var d = new Date()
        var today = [d.getFullYear(), d.getMonth()+1, d.getDate()]
        
        var lastChat = user.numberChats[user.numberChats.length-1]
        var lastEval = [lastChat.split("T")[0].split("-")[0], lastChat.split("T")[0].split("-")[1], lastChat.split("T")[0].split("-")[2]]


        var dateRegistration = [user.registration.split("T")[0].split("-")[0], user.registration.split("T")[0].split("-")[1], user.registration.split("T")[0].split("-")[2]]
            
        if (true) {

        }

        return user.numberChats.length
    }
}

function updateLifestyle (user) {

}

function updateIntegration (user) {

}

function updateNoOrientation (user) {

}

function computeStats (user) {
    var tabScores;
    var count = 0;
    user.score.forEach(score => {
        if (score >= 0) {
            tabScores.push(score)
        }
        else {
            var newScore;
            switch (count) {
                case 0:
                    newScore = updateMotivation(user)
                    break;

                case 1:
                    newScore = updateFidelity(user)
                    break;

                case 2:
                    newScore = updateLifestyle(user)
                    break;

                case 3:
                    newScore = updateIntegration(user)
                    break;

                case 4:
                    newScore = updateNoOrientation(user)
                    break;
            
                default:
                    break;
            }
            tabScores.push(newScore)
        }
        count = count +1
    });

    return tabScores
}


module.export = computeStats;