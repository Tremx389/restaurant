package hu.elte.alkfejl.restaurant.repository;

import hu.elte.alkfejl.restaurant.model.Review;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Gabesz
 */
@Repository
public interface ReviewRepository extends CrudRepository<Review, Integer> {
}