const express = require('express');
const cors = require('cors');  // Importing cors

const app = express();
const PORT = 3000;

// Use CORS middleware to allow requests from any origin
app.use(cors());

// Route for /api/orders
app.get('/api/orders', (req, res) => {
  const ordersData = {
    totalOrders: 2,
    totalPages: 1,
    hasPrevPage: false,
    hasNextPage: true,
    currentPage: 1,
    orders: [
      {
        orderNumber: "100001",
        customer: "625f5e8c3b8f4b1d2a6f5e8c",
        company: "625f5e8c3b8f4b1d2a6f5e9d",
        items: [
          {
            product: "625f5e8c3b8f4b1d2a6f5ea1",
            variantSKU: "VAR123",
            quantity: 2
          },
          {
            product: "625f5e8c3b8f4b1d2a6f5ea2",
            quantity: 1
          }
        ],
        totalAmount: 150.00,
        vendorBill: 120.00,
        paymentStatus: "Pending",
        shippingDetails: {
          firstName: "John",
          lastName: "Doe",
          email: "john.doe@example.com",
          phone: "+1234567890",
          address: "123 Elm Street",
          city: "Metropolis",
          state: "NY",
          country: "USA",
          zipCode: "10001",
          instruction: "Leave at the front door",
          shippingType: "Express",
          shippingCost: 10.00,
          estimatedDelivery: "2023-10-15T14:00:00Z"
        },
        status: "Pending",
        statusHistory: [
          { status: "Pending", date: "2023-10-10T10:00:00Z" }
        ],
        isConfirmed: false,
        confirm_token: {
          token: "a1b2c3d4e5f6",
          link: "https://example.com/confirm?token=a1b2c3d4e5f6",
          expires: "2023-10-12T10:00:00Z"
        },
        orderedAt: "2023-10-10T10:00:00Z"
      },
      {
        orderNumber: "100002",
        customer: "625f5e8c3b8f4b1d2a6f5e9c",
        company: "625f5e8c3b8f4b1d2a6f5e8d",
        items: [
          {
            product: "625f5e8c3b8f4b1d2a6f5eb1",
            quantity: 3
          }
        ],
        totalAmount: 75.00,
        vendorBill: 60.00,
        paymentStatus: "Paid",
        shippingDetails: {
          firstName: "Alice",
          lastName: "Smith",
          email: "alice.smith@example.com",
          phone: "+1234567890",
          address: "456 Oak Avenue",
          city: "Gotham",
          state: "CA",
          country: "USA",
          zipCode: "90210",
          instruction: "Ring the doorbell twice",
          shippingType: "Standard",
          shippingCost: 5.00,
          estimatedDelivery: "2023-10-18T14:00:00Z"
        },
        status: "Processing",
        statusHistory: [
          { status: "Pending", date: "2023-10-11T10:00:00Z" },
          { status: "Processing", date: "2023-10-12T11:00:00Z" }
        ],
        isConfirmed: true,
        confirm_token: null,
        orderedAt: "2023-10-11T10:00:00Z"
      }
    ]
  };

  res.json({
    type: "OkResponse",
    message: "OK",
    status: 200,
    success: true,
    data:ordersData});
});

app.get('/api/user-info', (req, res) => {
    const ordersData = {
      totalOrders: 2,
      totalPages: 1,
      hasPrevPage: false,
      hasNextPage: true,
      currentPage: 1,
      orders: [
        {
          orderNumber: "100001",
          customer: "625f5e8c3b8f4b1d2a6f5e8c",
          company: "625f5e8c3b8f4b1d2a6f5e9d",
          items: [
            {
              product: "625f5e8c3b8f4b1d2a6f5ea1",
              variantSKU: "VAR123",
              quantity: 2
            },
            {
              product: "625f5e8c3b8f4b1d2a6f5ea2",
              quantity: 1
            }
          ],
          totalAmount: 150.00,
          vendorBill: 120.00,
          paymentStatus: "Pending",
          shippingDetails: {
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com",
            phone: "+1234567890",
            address: "123 Elm Street",
            city: "Metropolis",
            state: "NY",
            country: "USA",
            zipCode: "10001",
            instruction: "Leave at the front door",
            shippingType: "Express",
            shippingCost: 10.00,
            estimatedDelivery: "2023-10-15T14:00:00Z"
          },
          status: "Pending",
          statusHistory: [
            { status: "Pending", date: "2023-10-10T10:00:00Z" }
          ],
          isConfirmed: false,
          confirm_token: {
            token: "a1b2c3d4e5f6",
            link: "https://example.com/confirm?token=a1b2c3d4e5f6",
            expires: "2023-10-12T10:00:00Z"
          },
          orderedAt: "2023-10-10T10:00:00Z"
        },
        {
          orderNumber: "100002",
          customer: "625f5e8c3b8f4b1d2a6f5e9c",
          company: "625f5e8c3b8f4b1d2a6f5e8d",
          items: [
            {
              product: "625f5e8c3b8f4b1d2a6f5eb1",
              quantity: 3
            }
          ],
          totalAmount: 75.00,
          vendorBill: 60.00,
          paymentStatus: "Paid",
          shippingDetails: {
            firstName: "Alice",
            lastName: "Smith",
            email: "alice.smith@example.com",
            phone: "+1234567890",
            address: "456 Oak Avenue",
            city: "Gotham",
            state: "CA",
            country: "USA",
            zipCode: "90210",
            instruction: "Ring the doorbell twice",
            shippingType: "Standard",
            shippingCost: 5.00,
            estimatedDelivery: "2023-10-18T14:00:00Z"
          },
          status: "Processing",
          statusHistory: [
            { status: "Pending", date: "2023-10-11T10:00:00Z" },
            { status: "Processing", date: "2023-10-12T11:00:00Z" }
          ],
          isConfirmed: true,
          confirm_token: null,
          orderedAt: "2023-10-11T10:00:00Z"
        }
      ]
    };
    res.json(
        {
            "type": "OkResponse",
            "message": "OK",
            "status": 200,
            "success": true,
            "data": {
                "id": "66d16678347d45bfeef047cd",
                "firstName": "Mohammad",
                "lastName": "Hossain",
                "email": "bcell43@gmail.com",
                "dob": null,
                "isActive": true,
                "isVerified": true,
                "cart": {
                    "id": "66d16678347d45bfeef047ce",
                    "owner": "66d16678347d45bfeef047cd",
                    "items": [
                        {
                            "details": {
                                "color": "#727272",
                                "size": 1,
                                "quantity": 1,
                                "price": 61000
                            },
                            "selected": true,
                            "product": {
                                "id": "669296742f0394b94734d3a4",
                                "name": "LENOVO IdeaPad Slim 3 15IRH8 Intel® Core™ i5-13420H 13th Gen – 8GB LPDDR5 ON-BOARD RAM / 512GB SSD I Intel® UHD Graphics I 15.6″ FHD I FreeDOS I Laptop (Arctic Grey) – 83EM003RPS",
                                "slug": "lenovo-ideapad-slim-3-15irh8-intel-core-i5-13420h-13th-gen-8gb-lpddr5-on-board-ram-512gb-ssd-i-intel-uhd-graphics-i-156-fhd-i-freedos-i-laptop-arctic-grey-83em003rps-SKU-004452",
                                "amount": 5,
                                "gender": "unisex",
                                "sku": "SKU-004452",
                                "description": "LENOVO IdeaPad Slim 3 15IRH8 Intel® Core™ i5-13420H 13th Gen – 8GB LPDDR5 ON-BOARD RAM / 512GB SSD I Intel® UHD Graphics I 15.6″ FHD I FreeDOS I Laptop (Arctic Grey) – 83EM003RPS\n\nKey Feature\nModel: Slim 3 15IRH8\nSeries: IdeaPad / Part No: 83EM003RPS\nProcessor: Intel® Core™ i5-13420H (E-Core Max3.40 GHz, P-Core Max 4.60 GHz, 8 Cores, 12 Threads, 12 MB Cache)\nGraphic: Integrated Intel® UHD Graphics\nDisplay: 15.6″ FHD (1920 x 1080) IPS Anti-Glare Non-Touch 300 Nits 16:9 Aspect Ratio\nInstalled RAM: 8GB ON-BOARD LPDDR5-4800 MHz (1 x 8GB) \nPrimary Storage: 512GB NVMe™ M.2 PCIe® 4.0×4 SSD\nOperating System: FreeDOS\n\nBrand: Lenovo \nWarranty: 2 YEARS WARRANTY\n",
                                "category": "66049c353039dcfaf390c7cb",
                                "company": "668a3efa2f0394b947349f02",
                                "subCategory": "66049c353039dcfaf390c7cc",
                                "subSubCategory": "66049c353039dcfaf390c7cf",
                                "costPrice": 68000,
                                "salePrice": 68000,
                                "discount": 7000,
                                "subImages": [
                                    null,
                                    null,
                                    null,
                                    null
                                ],
                                "image": "https://portal.strikeo.com/uploads/1720882802908-3.png",
                                "colors": [
                                    "#727272"
                                ],
                                "tags": [
                                    "#LENOVOIdeaPad #IdeaPadSlim3 #IntelCorei5 #13thGen #ArcticGrey #FreeDOS #8GBRAM #512GBSSD #FHD #IntelUHDGraphics #HighPerformanceLaptop #PortablePower #LENOVOLaptops #LaptopLife #WorkFromAnywhere #TechDeals #LaptopSale #SleekDesign #DigitalNomad #TechTrends #Innovation #LENOVOStore #LENOVODeals #OfficeLaptop #BusinessTech"
                                ],
                                "sizes": [
                                    1
                                ],
                                "brand": {
                                    "_id": "66df25349485b75856182f6b",
                                    "name": "lenovo"
                                },
                                "isActive": true,
                                "status": "Published",
                                "publishedAt": null
                            },
                            "_id": "66d166a9347d45bfeef047e2"
                        }
                    ],
                    "bill": 61000
                },
                "favourites": [],
                "role": {
                    "id": "658077ced4360a914cc2e68e",
                    "name": "Customer",
                    "type": "User",
                    "isActive": true
                },
                "billingAddresses": []
            }
        }
    );
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
