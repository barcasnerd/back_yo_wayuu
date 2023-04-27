import {SelectQueryBuilder} from "typeorm";
import {BasicQueryType, QueryConstructorParameters} from "../../general.repository";
import {ApplicationKnownErrors} from "../../../../../../application/errors/errors";
import {StatusErrorCode} from "../../../../../../common/errors/custom-error.helper";
import {ApplicationError} from "../../../../../../common/errors/application-error.helper";


export const simplifySearchQueriesHelper = <T>(queryBuilder: SelectQueryBuilder<T>, queryConstructor: QueryConstructorParameters[]): SelectQueryBuilder<T> => {
    // pre process query to avoid duplicated params
    let paramsCounter = 1; // used to replace all params keys
    for(const query of queryConstructor){
        for(const param of Object.keys(query.params)){
            const newParam = "reservedWord"+(paramsCounter++);
            query.condition = query.condition.replace(new RegExp(":" + param + "\\b"), ":" + newParam);
            query.params[newParam] = query.params[param];
            delete query.params[param];
        }
    }
    // process
    queryBuilder = queryBuilder.where(
        queryConstructor.map(value => value.condition).join(" and "),
        (() => {
            let generatedParams: { [key: string]: BasicQueryType | BasicQueryType[] } = {};
            for(const queryCondition of queryConstructor){
                for(const paramKey of Object.keys(queryCondition.params)){
                    if(generatedParams[paramKey] !== undefined){
                        throw new ApplicationError("duplicated parameter, this should not happen", ApplicationKnownErrors.INVALID_OPERATION, StatusErrorCode.InternalServerError);
                    }
                    generatedParams[paramKey] = queryCondition.params[paramKey];
                }
            }
            return generatedParams;
        })()
    );
    return queryBuilder;
}
