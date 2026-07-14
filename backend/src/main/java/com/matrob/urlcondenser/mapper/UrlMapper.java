package com.matrob.urlcondenser.mapper;

import com.matrob.urlcondenser.domain.Url;
import com.matrob.urlcondenser.dto.UrlStatsDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UrlMapper {

    UrlStatsDTO toStatsDTO(Url url);

}
