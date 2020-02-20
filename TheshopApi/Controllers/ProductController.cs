using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TheshopApi.Models;

namespace TheshopApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]

    public class ProductController : ControllerBase
    {
        public static List<Product> ProductData = new List<Product>
        {
            new Product { IdProduct = "201201",NameProduct = "product01" ,TypeProduct = "xxx" ,BrandProduct = "toyota" ,GenProduct = "supra" ,TotalProduct = "22" ,DetailProduct = "detail01" ,CostProduct = "1231000" ,SaleProduct = "2500000" ,SaleVIPProduct = "2400000" ,SaleVVIPProduct = "2300000" ,SaleVVVIPProduct = "2200000"},
            new Product { IdProduct = "201202",NameProduct = "product02" ,TypeProduct = "aaa" ,BrandProduct = "honda" ,GenProduct = "civic" ,TotalProduct = "25" ,DetailProduct = "detail02" ,CostProduct = "1231000" ,SaleProduct = "1531000" ,SaleVIPProduct = "1500000" ,SaleVVIPProduct = "1400000" ,SaleVVVIPProduct = "1300000"},
            new Product { IdProduct = "201203",NameProduct = "product03" ,TypeProduct = "bbb" ,BrandProduct = "toyota" ,GenProduct = "FT-86" ,TotalProduct = "31" ,DetailProduct = "detail03" ,CostProduct = "1231000" ,SaleProduct = "1531000" ,SaleVIPProduct = "1500000" ,SaleVVIPProduct = "1400000" ,SaleVVVIPProduct = "1300000"},
            new Product { IdProduct = "201204",NameProduct = "product04" ,TypeProduct = "xxx" ,BrandProduct = "nissan" ,GenProduct = "GTR" ,TotalProduct = "43" ,DetailProduct = "detail04" ,CostProduct = "1239000" ,SaleProduct = "1531000" ,SaleVIPProduct = "1500000" ,SaleVVIPProduct = "1400000" ,SaleVVVIPProduct = "1300000"},
             new Product { IdProduct = "201205",NameProduct = "product05" ,TypeProduct = "xxx" ,BrandProduct = "nissan" ,GenProduct = "350Z" ,DetailProduct = "detail05" ,CostProduct = "1239000" ,SaleProduct = "1531000" ,SaleVIPProduct = "1500000" ,SaleVVIPProduct = "1400000" ,SaleVVVIPProduct = "1300000"},
        };

        [HttpGet]
        public ActionResult<IEnumerable<Product>> GetAllProduct()
        {
            return ProductData.ToArray();
        }

        [HttpGet("{id}")]
        public ActionResult<Product> GetProductByid(string id)
        {
            return ProductData.FirstOrDefault(it => it.IdProduct == id.ToString());
        }

        [HttpPost]
        public Product AddProductData([FromBody] Product Productx)
        {
            var checkid = ProductData.FirstOrDefault(it => it.IdProduct == Productx.IdProduct.ToString());
            if (checkid != null)
            {
                return null;
            }
            else
            {
                var item = new Product
                {
                    IdProduct = Productx.IdProduct,
                    NameProduct = Productx.NameProduct,
                    TypeProduct = Productx.TypeProduct,
                    BrandProduct = Productx.BrandProduct,
                    GenProduct = Productx.GenProduct,
                    TotalProduct = "0",
                    DetailProduct = Productx.DetailProduct,
                    CostProduct = Productx.CostProduct,
                    SaleProduct = Productx.SaleProduct,
                    SaleVIPProduct = Productx.SaleVIPProduct,
                    SaleVVIPProduct = Productx.SaleVVIPProduct,
                    SaleVVVIPProduct = Productx.SaleVVVIPProduct
                };
                ProductData.Add(item);
                return item;
            }
        }

        [HttpPut("{id}")]
        public Product EditProductData(string id, [FromBody] Product Productx)
        {
            var _id = ProductData.FirstOrDefault(it => it.IdProduct == id.ToString());
            var item = new Product
            {
                IdProduct = id.ToString(),
                NameProduct = Productx.NameProduct,
                TypeProduct = Productx.TypeProduct,
                BrandProduct = Productx.BrandProduct,
                GenProduct = Productx.GenProduct,
                TotalProduct = Productx.TotalProduct,
                DetailProduct = Productx.DetailProduct,
                CostProduct = Productx.CostProduct,
                SaleProduct = Productx.SaleProduct,
                SaleVIPProduct = Productx.SaleVIPProduct,
                SaleVVIPProduct = Productx.SaleVVIPProduct,
                SaleVVVIPProduct = Productx.SaleVVVIPProduct
            };
            ProductData.Remove(_id);
            ProductData.Add(item);
            return item;
        }

        [HttpDelete("{id}")]
        public void DeleteProduct(string id)
        {
            var delete = ProductData.FirstOrDefault(it => it.IdProduct == id.ToString());
            ProductData.Remove(delete);
        }

        [HttpGet("{id}/{amount}")]
        public Product ChangeAddAmountProduct(string id, string amount)
        {
            var _id = ProductData.FirstOrDefault(it => it.IdProduct == id.ToString());
            var data = ProductData.FirstOrDefault(it => it.IdProduct == id.ToString());
            int total = int.Parse(data.TotalProduct) + int.Parse(amount);
            var item = new Product
            {
                IdProduct = id.ToString(),
                NameProduct = data.NameProduct,
                TypeProduct = data.TypeProduct,
                BrandProduct = data.BrandProduct,
                GenProduct = data.GenProduct,
                TotalProduct = total.ToString(),
                DetailProduct = data.DetailProduct,
                CostProduct = data.CostProduct,
                SaleProduct = data.SaleProduct,
                SaleVIPProduct = data.SaleVIPProduct,
                SaleVVIPProduct = data.SaleVVIPProduct,
                SaleVVVIPProduct = data.SaleVVVIPProduct
            };
            ProductData.Remove(_id);
            ProductData.Add(item);
            return item;
        }

        [HttpGet("{id}/{amount}")]
        public Product ChangeCencelAmountProduct(string id, string amount)
        {
            var _id = ProductData.FirstOrDefault(it => it.IdProduct == id.ToString());
            var data = ProductData.FirstOrDefault(it => it.IdProduct == id.ToString());
            int total = int.Parse(data.TotalProduct) - int.Parse(amount);
            var item = new Product
            {
                IdProduct = id.ToString(),
                NameProduct = data.NameProduct,
                TypeProduct = data.TypeProduct,
                BrandProduct = data.BrandProduct,
                GenProduct = data.GenProduct,
                TotalProduct = total.ToString(),
                DetailProduct = data.DetailProduct,
                CostProduct = data.CostProduct,
                SaleProduct = data.SaleProduct,
                SaleVIPProduct = data.SaleVIPProduct,
                SaleVVIPProduct = data.SaleVVIPProduct,
                SaleVVVIPProduct = data.SaleVVVIPProduct
            };
            ProductData.Remove(_id);
            ProductData.Add(item);
            return item;
        }
    }
}