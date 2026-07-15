package com.matrob.urlcondenser.repository;

import com.matrob.urlcondenser.domain.Url;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UrlRepository extends JpaRepository<Url, Long> {

    Optional<Url> findByShortCode(String shortCode);

    boolean existsByOriginalUrl(String originalUrl);

}
