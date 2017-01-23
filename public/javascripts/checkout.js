Stripe.setPublishableKey('pk_test_75wIts9OajdCHpN9azzjGCOq');

var $form = $('#checkout-form');

$form.submit(function(event){
    $('#charge-error').addClass('hidden');
    $form.find('button').prop('disabled', true);
    Stripe.card.createToken({
        number: $('#card-number').val(),
        cvc: $('#card-cvc').val(),
        exp_month: $('#card-expiry-month').val(),
        exp_year: $('#card-expiry-year').val(),
        name: $('#card-name').val()
    }, stripeResponseHandler);
    return false;
});

function stripeResponseHandler(status, response){
    if(response.error){
        // Montre les erreurs
        $('#charge-error').text(response.error.message);
        $('#charge-error').removeClass('hidden');
        $form.find('button').prop('disabled', false);
    } else{ // Création du token
        var token = response.id;
        // Envoi du token dans le formulaire pour l'envoyer au serveur
        $form.append($('<input type="hidden" name="stripeToken" />').val(token));
        // Envoi du formulaire
        $form.get(0).submit();
    }
}