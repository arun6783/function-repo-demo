export default async function (context, myTimer) {
  try {
    var timeStamp = new Date().toISOString()

    if (myTimer.isPastDue) {
      context.log('JavaScript is running late!')
    }
    context.log('JavaScript timer trigger function ran!', timeStamp)

    context.log('input blob ', JSON.stringify(context.bindings.myInputBlob))

    const newOffset = {
      timerState: {
        offset: 12 * Math.random(),
      },
    }

    context.bindings.myOutputBlob = newOffset
    context.log('updated the offset!!')
  } catch (e) {
    context.log.error('error occured ', e)
  }
}
