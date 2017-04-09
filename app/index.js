exports.handler = (event, context, callback) => {
    try {
        if (event.session.new) {
            // New Session
            console.log("NEW SESSION")
        }

        switch (event.request.type) {
            case "LaunchRequest":
                // Launch Request
                console.log(`LAUNCH REQUEST`)
                generateSuccessResponse(context)
                break;
            case "IntentRequest":
                // Intent Request
                console.log(`INTENT REQUEST`)
                generateSuccessResponse(context)
                break;
            case "SessionEndedRequest":
                // Session Ended Request
                console.log(`SESSION ENDED REQUEST`)
                break;
            default:
                context.fail(`INVALID REQUEST TYPE: ${event.request.type}`)
                break;
        }

    } catch (error) {
        context.fail(`Exception: ${error}`);
    }
};

// Helpers
var buildSpeechletResponse = (outputText, shouldEndSession) => {
    return {
        outputSpeech: {
            type: "PlainText",
            text: outputText
        },
        shouldEndSession: shouldEndSession
    }
}

var generateResponse = (speechletResponse, sessionAttributes) => {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    }
}

var generateSuccessResponse = (context) => {
    const greets = [
        "Hmmmmm baby, Hmmmmm baby, Hmmmmm baby,",
        "I love you tejal !!",
        "Tejal, How was your day?",
        "Tejal, bang bang, bangity bang, bang bang bangity bang",
        "dhuopti, dhuopti"
    ]
    return context.succeed(
        generateResponse(
            buildSpeechletResponse(greets[Math.floor(Math.random() * greets.length)], true),
            {}
        )
    )
}