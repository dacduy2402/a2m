$(document).ready(function () {
    let nameProduct = $("#nameProduct");
    let price = $("#price");
    let description = $("#description");
    let selectedProduct;
    $("#btnSubmit").click(function (e) {
        e.preventDefault();
        let requestBody = {
            id: null,
            nameProduct: nameProduct.val(),
            price: price.val(),
            description: description.val(),
        };

        if (selectedProduct) {
            requestBody.id = selectedProduct.id;
            $.ajax({
                url: 'http://localhost:8080/api/product/update-product',
                type: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify(requestBody)
            }).done(function (response) {
                alert('Update success !');
                resetFormInfo();
                getListProduct();
            });
        } else {
            $.ajax({
                url: 'http://localhost:8080/api/product/add-product',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(requestBody)
            }).done(function (response) {
                alert('Add success !');
                resetFormInfo();
                getListProduct();
            });
        }

        
    })

    $("#showProduct").click(function(e){
        getListProduct();
    })

    function getListProduct() {
        $.ajax({
            url: 'http://localhost:8080/api/product/get-list-product',
            type: 'GET',
        }).done(function (response) {
            listProduct = response;
            showListProduct();

            $(".fa-pen-to-square").click(function(e) {
                $.ajax({
                    url: 'http://localhost:8080/api/product/get-list-product',
                    type: 'GET',
                }).done(function (response) {

                });
            })

            $(".fa-trash-can").click(function(e) {
                let id = e.currentTarget.id;
                $.ajax({
                    url: 'http://localhost:8080/api/product/delete?'+$.param({"id": id}),
                    type: 'DELETE',
                }).done(function (response) {
                    alert('Delete success !');
                    getListProduct();
                });
            })

            $(".fa-pen-to-square").click(function(e) {
                console.log(e);
                let id = e.currentTarget.id;
                selectedProduct = listProduct.find(e => e.id == id);
                updateFormByProductInfo(selectedProduct)
            })


        });
    }


    function showListProduct() {
        var listProductHtml='';
        listProduct.forEach(element => {
            listProductHtml += '<div class="col-12 info-products">' +
                            '<div class="col-3 item"><a>' + element.nameProduct + '</a></div>' + 
                            '<div class="col-2 item"><a>' + element.price + '</a></div>' +
                            '<div class="col-4 item"><a>' + element.description + '</a></div>' +
                            '<div class="col-2 item"><i class="fa-sharp fa-solid fa-pen-to-square" id="'+element.id+'"></i></div>' +
                            '<div class="col-1 item"><i class="fa-sharp fa-solid fa-trash-can"id="'+element.id+'"></i></div></div>'
        });
        $("#products").html(listProductHtml);
    }

    function updateFormByProductInfo(productInfo) {
        nameProduct.val(productInfo.nameProduct);
        price.val(productInfo.price);
        description.val(productInfo.description);
    }

    function resetFormInfo() {
        nameProduct.val(null);
        price.val(null);
        description.val(null);
    }
})