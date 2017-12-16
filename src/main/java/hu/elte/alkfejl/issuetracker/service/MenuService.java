package hu.elte.alkfejl.issuetracker.service;

import hu.elte.alkfejl.issuetracker.model.Menu;
import static hu.elte.alkfejl.issuetracker.model.Menu.Type.DRINK;
import static hu.elte.alkfejl.issuetracker.model.Menu.Type.FOOD;
import hu.elte.alkfejl.issuetracker.model.Restaurant;
import hu.elte.alkfejl.issuetracker.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MenuService {
    
    @Autowired
    private MenuRepository menuRepository;
    
    @Autowired
    private RestaurantService restaurantService;
    
    public Iterable<Menu> menus() {
        return menuRepository.findAll();
    }
    
    public Menu create(MenuDto menuDto) {
        Menu menu = new Menu();
        
        if (menuDto.getType().equals("FOOD")) {
            menu.setType(FOOD);
        } else {
            menu.setType(DRINK);
        }
        
        menu.setName(menuDto.getName());
        
        Restaurant restaurant = restaurantService.read(menuDto.getRestaurantId());
        
        if(null != restaurant){
            menu.setRestaurant(restaurant);
        }
        return menuRepository.save(menu);
    }
    
    public Menu read(int id) {
        return menuRepository.findOne(id);
    }
    
    public void delete(int id) {
        menuRepository.delete(id);
    }
    
    public Menu update(int id, Menu menu) {
        Menu currentMenu = menuRepository.findOne(id);

        currentMenu.setType(menu.getType());
        currentMenu.setName(menu.getName());
        return menuRepository.save(currentMenu);
    }
}
