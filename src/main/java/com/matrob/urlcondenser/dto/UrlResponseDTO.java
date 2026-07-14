package com.matrob.urlcondenser.dto;

public record UrlResponseDTO(

        Long id,

        String originalUrl,

        String shortCode,

        String shortUrl

) {
}
