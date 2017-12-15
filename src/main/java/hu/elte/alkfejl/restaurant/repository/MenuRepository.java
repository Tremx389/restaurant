package hu.elte.alkfejl.restaurant.repository;

import hu.elte.alkfejl.restaurant.model.Menu;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Gabesz
 */
@Repository
public interface MenuRepository extends CrudRepository<Menu, Integer> {
}
