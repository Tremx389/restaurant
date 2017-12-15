package hu.elte.alkfejl.restaurant.api;

import hu.elte.alkfejl.restaurant.model.Restaurant;
import static hu.elte.alkfejl.restaurant.model.User.Role.BOSS;
import static hu.elte.alkfejl.restaurant.model.User.Role.MAJOR;
import static hu.elte.alkfejl.restaurant.model.User.Role.USER;
import hu.elte.alkfejl.restaurant.service.RestaurantService;
import hu.elte.alkfejl.restaurant.service.annotations.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/restaurants")
public class RestaurantApiController {
    
    
    @Autowired
    private RestaurantService restaurantService;
    
    @Role({USER, MAJOR, BOSS})
    @GetMapping
    private ResponseEntity<Iterable<Restaurant>> list() {
        Iterable<Restaurant> restaurants = restaurantService.restaurants();
        return ResponseEntity.ok(restaurants);
    }
    
    
    @Role(BOSS)
    @PostMapping
    private ResponseEntity<Restaurant> create(@RequestBody Restaurant restaurant) {
        Restaurant saved = restaurantService.create(restaurant);
        return ResponseEntity.ok(saved);
    }
    
    
    @Role({USER, MAJOR, BOSS})
    @GetMapping("/{id}")
    private ResponseEntity<Restaurant> read(@PathVariable String id) {
        Restaurant read = restaurantService.read(Integer.parseInt(id));
        return ResponseEntity.ok(read);
    }
    
    @Role(MAJOR)
    @DeleteMapping("/{id}")
    private ResponseEntity delete(@PathVariable int id) {
        restaurantService.delete(id);
        return ResponseEntity.ok().build();
    }
    
    @Role(MAJOR)
    @PutMapping("/{id}")
    private ResponseEntity<Restaurant> update(@PathVariable int id, @RequestBody Restaurant restaurant) {
        Restaurant updated = restaurantService.update(id, restaurant);
        return ResponseEntity.ok(updated);
    }
}
