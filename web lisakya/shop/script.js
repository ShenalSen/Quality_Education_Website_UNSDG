//shennexx

document.addEventListener('DOMContentLoaded', function() {
    var addToCartButtons = document.querySelectorAll('.addToCart button');
    var totalCost = 0; 
    
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            
            var productName = this.closest('.product').querySelector('.product-name h1').textContent;
            var productPrice = parseFloat(this.closest('.product').querySelector('.product-price p').textContent.replace('$', '')); 

            
            var orderTotal = document.getElementById('order');
            totalCost += productPrice; 
            orderTotal.textContent = 'Total Cost: $' + totalCost; 

            
            var orderDescription = document.getElementById('orderDescription');
            orderDescription.textContent += productName + ' - $' + productPrice.toFixed(2) + '\n';
        });
    });
});
