package hu.elte.alkfejl.issuetracker.service;

import hu.elte.alkfejl.issuetracker.model.City;
import hu.elte.alkfejl.issuetracker.model.Restaurant;
import hu.elte.alkfejl.issuetracker.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RestaurantService {
    
    @Autowired
    private RestaurantRepository restaurantRepository;
    
    @Autowired
    private CityService cityService;
    
    public Iterable<Restaurant> restaurants() {
        return restaurantRepository.findAll();
    }
    
    public Restaurant create(RestaurantDto restaurantDto) {
        Restaurant restaurant = new Restaurant();
        restaurant.setAddress(restaurantDto.getAddress());
        restaurant.setName(restaurantDto.getName());
        
        City city = cityService.read(restaurantDto.getCityId());
        
        if(null != city){
            restaurant.setCity(city);
        }
        
        return restaurantRepository.save(restaurant);
    }
    
    public Restaurant read(int id) {
        return restaurantRepository.findOne(id);
    }
    
    public void delete(int id) {
        restaurantRepository.delete(id);
    }
    
    public Restaurant update(int id, RestaurantDto restaurantDto) {
        Restaurant currentRestaurant = this.read(id);
        currentRestaurant.setName(restaurantDto.getName());
        currentRestaurant.setAddress(restaurantDto.getAddress());
        return restaurantRepository.save(currentRestaurant);
    }
}