

const handleYocoTokenisation = async (purchaseData) => {
    // const purchaseData = {
    //     userID: '22232',
    //     userEmail: '',
    //     itemName: '',
    //     itemDescription: '',
    //     amountInCents: 2799,
    //     currency: 'ZAR'
    // }

    var yoco = new window.YocoSDK({
        publicKey: 'pk_test_ed3c54a6gOol69qa7f45',
    });

    var tokenisationResults = null


    yoco.showPopup({
        amountInCents: purchaseData.amountInCents,
        currency: purchaseData.currency,
        name: purchaseData.itemName,
        description: purchaseData.itemDescription,
        callback: function (result) {
          // This function returns a token that your server can use to capture a payment
          if (result.error) {
            // const errorMessage = result.error.message;
            // alert("error occured: " + errorMessage);
            tokenisationResults = { status: 1, result : result }
          } else {
            // alert("card successfully tokenised: " + result.id);
            // console.log("Card successfully tokenised: ",result);
            //   Create a charge : this must be in backend with cors
            tokenisationResults = { status: 0, result : result }
          }
          // In a real integration - you would now pass this chargeToken back to your
          // server along with the order/basket that the customer has purchased.
        //   Send and http call to my backend
        }
    });

    return tokenisationResults;
}

module.exports = handleYocoTokenisation;