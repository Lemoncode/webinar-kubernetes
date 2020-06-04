using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace website.Data
{
    public class BeersService
    {
        private readonly HttpClient _client;
        private readonly ILogger _logger;

        public BeersService(IConfiguration config, ILogger<BeersService> logger)
        {
            _logger = logger;
            var baseUri = config["API_SERVICE_HOST"];
            var basePort = config["API_SERVICE_PORT"];
            _client = new HttpClient();
            _client.BaseAddress = new Uri($"http://{baseUri}:{basePort}");
        }

        public async Task<IEnumerable<Beer>> GetBeers()
        {
            _logger.LogInformation($"GET {_client.BaseAddress}beers");
            var response = await _client.GetAsync("beers");
            _logger.LogInformation($"{response.StatusCode} {_client.BaseAddress}beers");
            if (response.IsSuccessStatusCode)
            {
                return await JsonSerializer.DeserializeAsync<Beer[]>(await response.Content.ReadAsStreamAsync(), 
                    new JsonSerializerOptions()  {
                        PropertyNameCaseInsensitive = true
                    });
            }
            else 
            {
                return Enumerable.Empty<Beer>();
            }
        }
    }
}
