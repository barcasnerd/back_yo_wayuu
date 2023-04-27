import {Specie} from "../../../../../../entities/models/specie/specie.model.entity";
import {SpecieEntity} from "../../../entities/specie.entity";
import {Genus} from "../../../../../../entities/models/genus/genus.model.entity";
import {GenusEntity} from "../../../entities/genus.entity";
import {SpecimenEntity} from "../../../entities/specimen.entity";
import {Specimen, WeightType} from "../../../../../../entities/models/specimen/specimen.model.entity";
import {RecordFileEntity} from "../../../entities/record-file.entity";
import {RecordFile} from "../../../../../../entities/models/record/record-file.model.entity";
import {RecordEntity} from "../../../entities/record.entity";
import {IncomeClassification, Record, RecordType} from "../../../../../../entities/models/record/record.model.entity";
import {FormFieldEntity} from "../../../entities/form-field.entity";
import {FormField, FormType} from "../../../../../../entities/models/form/form-field.model.entity";
import {CaptivityHistoryEntity} from "../../../entities/captivity-history.entity";
import {CaptivityHistory} from "../../../../../../entities/models/captivity-history/captivity-history.model.entity";
import {FormFieldValueEntity} from "../../../entities/form-field-value.entity";
import {FormFieldValue} from "../../../../../../entities/models/form/form-field-value.model.entity";
import {PreliminaryClinicHistoryEntity} from "../../../entities/preliminary-clinic-history.entity";
import {
    PreliminaryClinicHistory
} from "../../../../../../entities/models/preliminary-clinic-history/preliminary-clinic_history.model.entity";
import {RegionalEntity} from "../../../entities/regional.entity";
import {Regional} from "../../../../../../entities/models/regional/regional.model.entity";
import {ActorEntity} from "../../../entities/actor.entity";
import {Actor} from "../../../../../../entities/models/actor/actor.model.entity";
import {IndividualEntity} from "../../../entities/individual.entity";
import {Individuals} from "../../../../../../entities/models/Individuals/individuals.model.entity";
import {ReleaseRecordEntity} from "../../../entities/release-record.entity";
import {ReleaseRecord} from "../../../../../../entities/models/release-record/release-record.model.entity";
import {IndividualsDeliveryEntity} from "../../../entities/individuals-delivery.entity";
import {
    IndividualsDelivery
} from "../../../../../../entities/models/individuals-delivery/individuals-delivery.model.entity";
import {MedicineEntity} from "../../../entities/medicine.entity";
import {Medicine} from "../../../../../../entities/models/medicine/medicine.model.entity";
import {VitalSignsEntity} from "../../../entities/vital-signs.entity";
import {OralMucosa, Pupils, VitalSigns} from "../../../../../../entities/models/vital-signs/vital-signs.model.entity";
import {PictureEntity} from "../../../entities/picture.entity";
import {Picture} from "../../../../../../entities/models/picture/picture.model.entity";
import {EuthanasiaEntity} from "../../../entities/euthanasia.entity";
import {
    Euthanasia, EuthanasiaMethod,
    EuthanasiaProcess,
    PreEuthanasia
} from "../../../../../../entities/models/euthanasia/euthanasia.model.entity";
import {MedicalExaminationEntity} from "../../../entities/medical-examination.entity";
import {
    MedicalExamination
} from "../../../../../../entities/models/medical-examination/medical-examination.model.entity";
import {NecropsyEntity} from "../../../entities/necropsy.entity";
import {Necropsy} from "../../../../../../entities/models/necropsy/necropsy.model.entity";
import {EntryRecordEntity} from "../../../entities/entry-record.entity";
import {
    AdmissionType,
    EntryRecord,
} from "../../../../../../entities/models/entry-record/entry-record.model.entity";
import {DepartureRecordEntity} from "../../../entities/departure-record.entity";
import {
    DepartureDestinies,
    DepartureRecord,
    DepartureTypes
} from "../../../../../../entities/models/departure-record/departure-record.model.entity";
import {SpecimenMarkingEntity} from "../../../entities/specimen-marking.entity";
import {
    MarkingTypes,
    SpecimenMarking
} from "../../../../../../entities/models/specimen-marking/specimen-marking.model.entity";
import {LabSampleEntity} from "../../../entities/sample.entity";
import {LabSample, TestTypes} from "../../../../../../entities/models/sample/sample.model.entity";
import {LabSampleOrderEntity} from "../../../entities/sample-order.entity";
import {LabSampleOrder} from "../../../../../../entities/models/sample/sample-order.model.entity";
import {NeonatalMonitoringEntity} from "../../../entities/neonatal-monitoring.entity";
import {
    NeonatalMonitoring
} from "../../../../../../entities/models/neonatal-monitoring/neonatal-monitoring.model.entity";
import {DietEntity} from "../../../entities/diet.entity";
import {Diet} from "../../../../../../entities/models/diet/diet.model.entity";
import {Monitoring} from "../../../../../../entities/models/monitoring/monitoring.model.entity";
import {MonitoringEntity} from "../../../entities/monitoring.entity";
import {LodgingConditionEntity} from "../../../entities/lodging-condition.entity";
import {LodgingCondition} from "../../../../../../entities/models/lodging-condition/lodging-condition.model.entity";
import {LabSampleTypeEntity} from "../../../entities/sample-type.entity";
import {LabSampleType} from "../../../../../../entities/models/sample/sample-type.entity";
import {BiologicalManagementEntity} from "../../../entities/biological-management.entity";
import {
    AggressivenessLevel,
    BiologicalManagement, Habit,
    Specie as SpecieBiological
} from "../../../../../../entities/models/biological-management/biological-management.model.entity";
import {RoutineEvaluationEntity} from "../../../entities/routine-evaluation.entity";
import {RoutineEvaluation} from "../../../../../../entities/models/routine-evaluation/routine-evaluation.model.entity";
import {DietManagementEntity} from "../../../entities/diet-management.entity";
import {
    DietManagement,
    DietType as DietTypeD
} from "../../../../../../entities/models/diet-management/diet-management.model.entity";
import {EnrichmentMaterialEntity} from "../../../entities/enrichment-material.entity";
import {
    EnrichmentMaterial
} from "../../../../../../entities/models/enrichment-material/enrichment-material.model.entity";
import {
    HospitalizationAdmission
} from "../../../../../../entities/models/hospitalization/hospitalization-admission.model.entity";
import {HospitalizationAdmissionEntity} from "../../../entities/hospitalization-admission.entity";
import {
    AdmissionType as AdmissionTypeHospitalization
} from "../../../../../../entities/models/hospitalization/hospitalization-admission.model.entity";
import {HospitalizationDischargeEntity} from "../../../entities/hospitalization-discharge.entity";
import {
    HospitalizationDischarge
} from "../../../../../../entities/models/hospitalization/hospitalization-discharge.model.entity";
import {HospitalizationMonitoringEntity} from "../../../entities/hospitalization-monitoring.entity";
import {
    HospitalizationMonitoring,
    Selection
} from "../../../../../../entities/models/hospitalization/hospitalization-monitoring.model.entity";
import {SamplingEntity} from "../../../entities/sampling.entity";
import {Sampling} from "../../../../../../entities/models/sampling/sampling.model.entity";
import {EthogramEntity} from "../../../entities/ethogram.entity";
import {Ethogram} from "../../../../../../entities/models/ethogram/ethogram.model.entity";

import {MaterialEntity} from "../../../entities/material.entity";
import {Material} from "../../../../../../entities/models/material/material.model.entity";
import {EnrichmentManagementEntity} from "../../../entities/enrichment-management/enrichment-management.entity";
import {
    EnrichmentManagement, EnrichmentManagementPhotoGraphicRegister
} from "../../../../../../entities/models/enrichment-management/enrichment-management.model.entity";
import {QuarantineDepartureEntity} from "../../../entities/quarantine-departure.entity";
import {QuarantineDeparture} from "../../../../../../entities/models/quarantine/quarantine-departure.model.entity";
import {QuarantineEntryEntity} from "../../../entities/quarantine-entry.entity";
import {
    QuarantineEntry,
    QuarantineType
} from "../../../../../../entities/models/quarantine/quarantine-entry.model.entity";
import {DrugConfigurationEntity} from "../../../entities/drug-configuration.entity";
import {
    DrugConfiguration,
} from "../../../../../../entities/models/drug-configuration/drug-configuration.model.entity";
import {TherapeuticSupplyEntity} from "../../../entities/therapeutic-supply.entity";
import {TherapeuticSupply} from "../../../../../../entities/models/therapeutic/therapeutic-supply.model.entity";
import {TherapeuticMedicineEntity} from "../../../entities/therapeutic-medicine.entity";
import {
    TherapeuticMedicine,
    Unit as TherapeuticMedicineUnit
} from "../../../../../../entities/models/therapeutic/therapeutic-medicine.model.entity";
import {TherapeuticEntity} from "../../../entities/therapeutic.entity";
import {
    Therapeutic,
    Request as TherapeuticRequest
} from "../../../../../../entities/models/therapeutic/therapeutic.model.entity";
import {BehaviorEthogramEntity} from "../../../entities/behavior-ethogram.entity";
import {BehaviorEthogram} from "../../../../../../entities/models/ethogram/behavior-ethogram.model.entity";
import {EthogramCodeEntity} from "../../../entities/ethogram-code.entity";
import {EthogramCode} from "../../../../../../entities/models/ethogram/ethogram-code.model.entity";
import {BehaviorFrequencyEntity} from "../../../entities/behavior-frequency.entity";
import {BehaviorFrequency} from "../../../../../../entities/models/ethogram/behavior-frequency.model.entity";
import {DrugTypeEntity} from "../../../entities/drug-type.entity";
import {DrugType} from "../../../../../../entities/models/drug-configuration/drug-type.model.entity";
import {TemporaryDeliveryCertificateEntity} from "../../../entities/temporary-delivery-certificate.entity";
import {
    TemporaryDeliveryCertificate
} from "../../../../../../entities/models/temporary-delivery-certificate/temporary-delivery-certificate.model.entity";
import {ClinicHistoryEntity} from "../../../entities/clinic-history.entity";
import {
    ClinicHistory,
    ClinicHistoryStatus
} from "../../../../../../entities/models/clinic-history/clinic-history.model.entity";
import {DietProvidedEntity} from "../../../entities/diet-provided.entity";
import {DietProvided} from "../../../../../../entities/models/diets-provided/diet-provided.model.entity";
import {ResidueDietEntity} from "../../../entities/residue-diet.entity";
import {ResidueDiet} from "../../../../../../entities/models/residue-diet/residue-diet.model.entity";
import {
    CriticalCareAdmission
} from "../../../../../../entities/models/critical-care/critical-care-admission.model.entity";
import {CriticalCareAdmissionEntity} from "../../../entities/critical-care-admission.entity";
import {
    CriticalCareDischarge
} from "../../../../../../entities/models/critical-care/critical-care-discharge.model.entity";
import {
    CriticalCareMonitoring
} from "../../../../../../entities/models/critical-care/critical-care-monitoring.model.entity";
import {CriticalCareDischargeEntity} from "../../../entities/critical-care-discharge.entity";
import {CriticalCareMonitoringEntity} from "../../../entities/critical-care-monitoring.entity";
import {BiologicalConceptEntity} from "../../../entities/biological-concept.entity";
import {BiologicalConcept} from "../../../../../../entities/models/biological-concept/biological-concept.model.entity";
import {ZootechnicalConceptEntity} from "../../../entities/zootechnical-concept.entity";
import {
    ZootechnicalConcept
} from "../../../../../../entities/models/zootechnical-concept/zootechnical-concept.model.entity";
import {VeterinaryConceptEntity} from "../../../entities/veterinary-concept.entity";
import {VeterinaryConcept} from "../../../../../../entities/models/veterinary-concept/veterinary-concept.model.entity";
import {DestinationEntity} from "../../../entities/destination.entity";
import {Destination, Destiny} from "../../../../../../entities/models/destination/destination.model.entity";
import {
    BiologicalVeterinaryConcept
} from "../../../../../../entities/models/biological-veterinary-concept/biological-veterinary-concept";
import {BiologicalVeterinaryConceptEntity} from "../../../entities/biological-veterinary-concept.entity";
import {LivingCostsEntity} from "../../../entities/living-costs.entity";
import {LivingCosts} from "../../../../../../entities/models/living-costs/living-costs.model.entity";
import {DiagnosticTestEntity} from "../../../entities/diagnostic-test.entity";
import {DiagnosticTests} from "../../../../../../entities/models/diagnostic-tests/diagnostic-tests.model.entity";
import {
    TemporaryDeliveryCertificateRelationEntity
} from "../../../entities/temporary-delivery-certificate-relation.entity";
import {
    TemporaryDeliveryCertificateRelation
} from "../../../../../../entities/models/temporary-delivery-certificate/temporary-delivery-certificate-relation.model.entity";
import {ClinicRecordEntity} from "../../../entities/clinic-record.entity";
import {
    ClinicRecord,
    ClinicRecordType
} from "../../../../../../entities/models/clinic-history/clinic-record.model.entity";
import {KingdomEntity} from "../../../entities/kingdom.entity";
import {Kingdom} from "../../../../../../entities/models/kingdom/kingdom.model.entity";
import {OrderEntity} from "../../../entities/order.entity";
import {Order} from "../../../../../../entities/models/order/order.model.entity";
import {PhylumEntity} from "../../../entities/phylum.entity";
import {Phylum} from "../../../../../../entities/models/phylum/phylum.model.entity";
import {FamilyEntity} from "../../../entities/family.entity";
import {Family} from "../../../../../../entities/models/family/family.model.entity";
import {SubSpecie} from "../../../../../../entities/models/subspecie/subspecie.model.entity";
import {SubSpecieEntity} from "../../../entities/subspecie.entity";
import {FinalDisposition} from "../../../../../../entities/models/final-disposition/final-disposition.model.entity";
import {FinalDispositionEntity} from "../../../entities/final-disposition.entity";
import {ClassTEntity} from "../../../entities/classt.entity";
import {ClassT} from "../../../../../../entities/models/classt/classt.model.entity";
import {DietTypeEntity} from "../../../entities/diet-type.entity";
import {DietType} from "../../../../../../entities/models/diet-type/diet-type.model.entity";
import {
    EnrichmentManagementPhotographicRegisterEntity
} from "../../../entities/enrichment-management/enrichment-management-photographic-register.entity";
import {AttachmentRepository} from "../../attachment/attachment.repository";


export function GenusEntityToDomain(input: GenusEntity): Genus {
    return {
        id: input.id,
        name: input.name,
        state: input.state,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt,
        specimens: input.specimens ? (input.specimens.length > 0 ? [] : undefined) : undefined,
    }
}

export function SpecieEntityToDomain(input: SpecieEntity): Specie {
    return {
        id: input.id,
        name: input.name,
        state: input.state,
        naturalDistribution: input.naturalDistribution,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt,
        specimens: input.specimens ? (input.specimens.length > 0 ? [] : undefined) : undefined,
    }
}

export function SpecimenEntityToDomain(input: SpecimenEntity): Specimen {
    return {
        id: input.id,
        commonName: input.commonName,
        genus: input.genus ? GenusEntityToDomain(input.genus) : undefined,
        specie: input.specie ? SpecieEntityToDomain(input.specie) : undefined,
        growth: input.growth !== undefined ? input.growth : undefined,
        scientificName: input.scientificName !== undefined ? input.scientificName : undefined,
        gender: input.gender !== undefined ? input.gender : undefined,
        status: input.status !== undefined ? input.status : undefined,
        weight: input.weight !== undefined ? input.weight : undefined,
        originId: input.originId !== undefined ? input.originId : undefined,
        weightType: input.weightType !== undefined ? <WeightType>input.weightType : undefined,
        preliminaryClinicHistory: input.preliminaryClinicHistory ? PreliminaryClinicHistoryEntityToIndividual(input.preliminaryClinicHistory) : undefined,
        referencedPreliminaryClinicHistory: input.referencedPreliminaryClinicHistory ? PreliminaryClinicHistoryEntityToIndividual(input.referencedPreliminaryClinicHistory) : undefined,
        necropsies: input.necropsy?.map(el => NecropsyEntitySpecimen(el)),
        euthanasia: input.euthanasia ? EuthanasiaEntityToSpecimen(input.euthanasia) : undefined,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt,
        entryRecords: input.entryRecords?.map(el => EntryRecordEntityToEntryRecord(el)),
        markings: input.markings?.map(el => SpecimenMarkingEntityToSpecimenMarking(el)),

    }
}

export function RecordFileEntityToRecord(input: RecordFileEntity): RecordFile {
    return {
        id: input.id,
        bucket: input.bucket,
        objectName: input.objectName,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function RecordEntityToDomain(input: RecordEntity): Record {
    return {
        id: input.id,
        recordNumber: input.recordNumber,
        date: input.date,
        quantity: input.quantity,
        regional: input.regional ? RegionalEntityToDomain(input.regional) : undefined!,
        type: <RecordType>input.type,
        files: input.files ? input.files.map(e => RecordFileEntityToRecord(e)) : [],
        status: input.status,
        specimens: input.specimens ? input.specimens.map(e => SpecimenEntityToDomain(e)) : undefined,
        incomeClassification: input.incomeClassification ? <IncomeClassification>input.incomeClassification : undefined,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt,
        updatedById: input.updatedById,
        createdById: input.createdById,
        originMunicipalityId: input.originMunicipalityId,
        originDepartmentId: input.originDepartmentId,
    }
}

export function FormFieldEntityToDomain(input: FormFieldEntity): FormField {
    return {
        id: input.id,
        name: input.name,
        formId: input.formId,
        type: <FormType>input.type,
        required: input.required,
        options: input.options,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function RegionalEntityToDomain(input: RegionalEntity): Regional {
    return {
        id: input.id,
        name: input.name,
        state: input.state,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt,
        records: input.records ? (input.records.length > 0 ? [] : undefined) : undefined,
        individualsDelivery: input.individualsDelivery ? (input.individualsDelivery.length > 0 ? [] : undefined) : undefined,
        releaseRecords: input.releaseRecords ? (input.releaseRecords.length > 0 ? [] : undefined) : undefined,
    }


}

export function FormFieldValueEntityToCaptivityHistory(input: FormFieldValueEntity): FormFieldValue {
    return {
        id: input.id,
        value: input.value,
        formField: FormFieldEntityToDomain(input.formField || {}),
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function ActorEntityToReleaseRecord(input: ActorEntity): Actor {
    return {
        id: input.id,
        actorId: input.actorId,
        type: input.type,
        necropsy: input.necropsy ? NecropsyEntityToDomain(input.necropsy) : undefined,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }


}

export function CaptivityHistoryEntityToClinicHistory(input: CaptivityHistoryEntity): CaptivityHistory {
    return {
        id: input.id,
        formFieldValues: input.formFieldValues?.map(e => FormFieldValueEntityToCaptivityHistory(e)),
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function MedicalExaminationEntityToMedicalExamination(entity: MedicalExaminationEntity): MedicalExamination {
    return {
        id: entity.id,
        deletedAt: entity.deletedAt,
        updatedAt: entity.updatedAt,
        createdAt: entity.createdAt,
        labSampleOrders: entity.labSampleOrders ? entity.labSampleOrders.map(el => labSampleOrderEntityToLabSampleOrder(el)) : undefined,
        registeringActor: entity.registeringActor ? ActorEntityToReleaseRecord(entity.registeringActor) : undefined,
        formFieldValues: entity.formFieldValues?.map(el => FormFieldValueEntityToCaptivityHistory(el)),
        therapeutic: entity.therapeutic ? TherapeuticEntityToDomain(entity.therapeutic) : undefined,
        preliminaryClinicHistory: entity.preliminaryClinicHistory ? PreliminaryClinicHistoryEntityToIndividual(entity.preliminaryClinicHistory) : undefined,
    }
}

export function IndividualEntityToReleaseRecord(input: IndividualEntity): Individuals {
    return {
        id: input.id,
        quantity: input.quantity,
        longitude: input.longitude,
        safePassageRecord: input.records ? input.records.filter(function (obj) {
            return obj.type == 'safe-passage';
        }).map(function (obj) {
            return RecordEntityToIndividual(obj);
        }) : [],
        seizureRecord: input.records ? input.records.filter(function (obj) {
            return obj.type == 'seizure-record';
        }).map(function (obj) {
            return RecordEntityToIndividual(obj);
        }) : [],
        specimen: input.specimen ? SpecimenEntityToDomain(input.specimen) : undefined,
        preliminaryClinicHistory: input.preliminaryClinicHistory ? input.preliminaryClinicHistory.map(e => ClinicHistoryEntityToDomain(e)) : [],
        clinicHistories: input.clinicHistories ? input.clinicHistories.map(e => ClinicHistoryTempEntityToDomain(e)) : [],
        individualsDelivery: input.individualsDelivery ? IndividualsDeliveryEntityToDomain(input.individualsDelivery) : undefined,
        latitude: input.latitude,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function ClinicHistoryEntityToDomain(input: PreliminaryClinicHistoryEntity): PreliminaryClinicHistory {
    return {
        id: input.id,
        date: input.date,
        CARFilingNumber: input.CARFilingNumber,
        specimen: input.specimen ? SpecimenEntityToDomain(input.specimen) : undefined,
        regional: input.regional ? RegionalEntityToDomain(input.regional) : undefined,
        safePassageRecordObservation: input.safePassageRecordObservation,
        safePassageRecord: input.safePassageRecord ? RecordEntityToDomain(input.safePassageRecord) : undefined,
        seizureRecordObservation: input.seizureRecordObservation,
        seizureRecord: input.seizureRecord ? RecordEntityToDomain(input.seizureRecord) : undefined,
        departureRecord: input.departureRecord ? DepartureRecordEntityToDepartureRecord(input.departureRecord) : undefined,
        entryRecord: input.entryRecord ? EntryRecordEntityToEntryRecord(input.entryRecord) : undefined,
        captivityHistory: CaptivityHistoryEntityToClinicHistory(input.captivityHistory),
        actors: input.actors ? input.actors.map(e => ActorEntityToReleaseRecord(e)) : [],
        state: input.state,
        neonatalMonitoring: input.neonatalMonitoring ? NeonatalMonitoringEntityToDomain(input.neonatalMonitoring) : undefined,
        biologicalManagements: input.biologicalManagements ? input.biologicalManagements.map(el => BiologicalManagementEntityToDomain(el)) : undefined,
        routineEvaluation: input.routineEvaluation ? RoutineEvaluationEntityToDomain(input.routineEvaluation) : undefined,
        hospitalizationAdmission: input.hospitalizationAdmission ? input.hospitalizationAdmission.map(e => HospitalizationAdmissionEntityToDomain(e)) : [],
        quarantineEntries: input.quarantineEntries ? input.quarantineEntries.map(el => QuarantineEntryToDomain(el)) : undefined,
        therapeutic: input.therapeutic ? TherapeuticEntityToDomain(input.therapeutic) : undefined,
        criticalCareAdmission: input.criticalCareAdmission ? input.criticalCareAdmission.map(e => CriticalCareAdmissionEntityToDomain(e)) : [],
        clinicHistory: input.clinicHistory ? ClinicHistoryTempEntityToDomain(input.clinicHistory) : undefined,
        labSampleOrders: input.labSampleOrders ? input.labSampleOrders.map(e => labSampleOrderEntityToLabSampleOrder(e)) : [],
        individuals: input.individuals ? input.individuals.map(e => IndividualEntityToReleaseRecord(e)) : [],
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }

}

export function ClinicHistoryEntityToDelete(input: PreliminaryClinicHistoryEntity): PreliminaryClinicHistory {
    return {
        id: input.id,
        date: input.date,
        CARFilingNumber: input.CARFilingNumber,
        captivityHistory: undefined!,
        safePassageRecordObservation: input.safePassageRecordObservation,
        seizureRecordObservation: input.seizureRecordObservation,
        state: input.state,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }

}

export function RecordEntityToIndividual(input: RecordEntity): Record {
    return {
        id: input.id,
        recordNumber: input.recordNumber,
        date: input.date,
        quantity: input.quantity,
        regional: input.regional ? RegionalEntityToDomain(input.regional) : undefined!,
        type: <RecordType>input.type,
        status: input.status,
        incomeClassification: input.incomeClassification ? <IncomeClassification>input.incomeClassification : undefined,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt,
        createdById: input.createdById,
        updatedById: input.updatedById
    }
}

export function ReleaseRecordEntityToDomain(input: ReleaseRecordEntity): ReleaseRecord {
    return {
        id: input.id,
        entity: input.entity ? RegionalEntityToDomain(input.entity) : undefined,
        observation: input.observation,
        transport: input.transport,
        description: input.description,
        cityId: input.cityId,
        departmentId: input.departmentId,
        date: input.date,
        authority: input.authority,
        actors: input.actors.map(e => ActorEntityToReleaseRecord(e)),
        individuals: input.individuals.map(e => IndividualEntityToReleaseRecord(e)),
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function ReleaseRecordEntityToDomainWithoutRelations(input: ReleaseRecordEntity): ReleaseRecord {
    return {
        id: input.id,
        entity: input.entity ? RegionalEntityToDomain(input.entity) : undefined,
        observation: input.observation,
        transport: input.transport,
        description: input.description,
        cityId: input.cityId,
        departmentId: input.departmentId,
        date: input.date,
        authority: input.authority,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function IndividualEntityToIndividualsDelivery(input: IndividualEntity): Individuals {
    return {
        id: input.id,
        quantity: input.quantity,
        longitude: input.longitude,
        safePassageRecord: input.records ? input.records.filter(function (obj) {
            return obj.type == 'safe-passage';
        }).map(function (obj) {
            return RecordEntityToIndividual(obj);
        }) : [],
        seizureRecord: input.records ? input.records.filter(function (obj) {
            return obj.type == 'seizure-record';
        }).map(function (obj) {
            return RecordEntityToIndividual(obj);
        }) : [],
        specimen: input.specimen ? SpecimenEntityToDomain(input.specimen) : undefined,
        latitude: input.latitude,
        observations: input.observations,
        preliminaryClinicHistory: input.preliminaryClinicHistory ? input.preliminaryClinicHistory.map(e => ClinicHistoryEntityToDomain(e)) : [],
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }


}

export function IndividualsDeliveryEntityToDomain(input: IndividualsDeliveryEntity): IndividualsDelivery {
    return {
        id: input.id,
        date: input.date,
        entity: input.entity ? RegionalEntityToDomain(input.entity) : undefined,
        individuals: input.individuals ? input.individuals.map(e => IndividualEntityToIndividualsDelivery(e)) : [],
        sentTo: input.sentTo ? input.sentTo.map(e => ActorEntityToReleaseRecord(e)) : [],
        sentFrom: input.sentFrom ? input.sentFrom.map(e => ActorEntityToReleaseRecord(e)) : [],
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function MedicineEntityToDomain(input: MedicineEntity): Medicine {
    return {
        id: input.id,
        drug: input.drug,
        finalDose: input.finalDose,
        initialDose: input.initialDose,
        administrationRoute: input.administrationRoute,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function VitalSignsEntityToDomain(input: VitalSignsEntity): VitalSigns {
    return {
        id: input.id,
        time: input.time,
        FRC: input.FRC,
        FRR: input.FRR,
        pulse: input.pulse,
        oralMucosa: <OralMucosa>input.oralMucosa,
        cornealReflex: input.cornealReflex,
        pupils: <Pupils>input.pupils,
        painReflex: input.painReflex,
        rigorMortis: input.rigorMortis,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function PictureEntityToDomain(input: PictureEntity): Picture {
    return {
        id: input.id,
        bucket: input.bucket,
        objectName: input.objectName,
        originalName: input.originalName,
        fieldName: input.fieldName,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function EuthanasiaEntityToDomain(input: EuthanasiaEntity): Euthanasia {
    return {
        id: input.id,
        date: input.date,
        hour: input.hour,
        preEuthanasiaUsed: <PreEuthanasia>input.preEuthanasiaUsed,
        preEuthanasiaMedicines: input.preEuthanasiaMedicines ? input.preEuthanasiaMedicines.map(e => MedicineEntityToDomain(e)) : [],
        euthanasiaMedicines: input.euthanasiaMedicines ? input.euthanasiaMedicines.map(e => MedicineEntityToDomain(e)) : [],
        actors: input.actors ? input.actors.map(e => ActorEntityToReleaseRecord(e)) : [],
        specimen: input.specimen ? SpecimenEntityToDomain(input.specimen) : undefined!,
        pictures: input.pictures ? input.pictures.map(e => PictureEntityToDomain(e)) : [],
        vitalSigns: input.vitalSigns ? input.vitalSigns.map(e => VitalSignsEntityToDomain(e)) : [],
        preliminaryClinicHistory: input.preliminaryClinicHistory ? PreliminaryClinicHistoryEntityToIndividual(input.preliminaryClinicHistory) : undefined,
        observation: input.observation,
        euthanasiaProcess: <EuthanasiaProcess>input.euthanasiaProcess,
        euthanasiaMethod: <EuthanasiaMethod>input.euthanasiaMethod,
        reason: input.reason,
        anotherEuthanasiaProcess: input.anotherEuthanasiaProcess,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function PreliminaryClinicHistoryEntityToIndividual(input: PreliminaryClinicHistoryEntity): PreliminaryClinicHistory {
    return {
        id: input.id,
        date: input.date,
        CARFilingNumber: input.CARFilingNumber,
        regional: input.regional ? RegionalEntityToDomain(input.regional) : undefined,
        seizureRecordObservation: input.seizureRecordObservation,
        safePassageRecordObservation: input.safePassageRecordObservation,
        safePassageRecord: input.safePassageRecord ? RecordEntityToDomain(input.safePassageRecord) : undefined,
        seizureRecord: input.seizureRecord ? RecordEntityToDomain(input.seizureRecord) : undefined,
        captivityHistory: input.captivityHistory ? CaptivityHistoryEntityToClinicHistory(input.captivityHistory) : undefined!,
        biologicalManagements: input.biologicalManagements?.map(el => BiologicalManagementEntityToDomain(el)),
        actors: input.actors ? input.actors.map(e => ActorEntityToReleaseRecord(e)) : [],
        state: input.state,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt,
        departureRecord: input.departureRecord ? DepartureRecordEntityToDepartureRecord(input.departureRecord) : undefined,
        entryRecord: input.entryRecord ? EntryRecordEntityToEntryRecord(input.entryRecord) : undefined,
        specimen: input.specimen ? SpecimenEntityToDomain(input.specimen) : undefined,
        therapeutic: input.therapeutic ? TherapeuticEntityToDomain(input.therapeutic) : undefined,
        clinicHistory: input.clinicHistory ? ClinicHistoryTempEntityToDomain(input.clinicHistory) : undefined,
        residueDiets: input.residueDiets !== undefined ? input.residueDiets.map((residue) => ResidueDietToDomain(residue)) : undefined,
        relatedPreliminaryClinic: input.relatedPreliminaryClinic ? input.relatedPreliminaryClinic.map(e => TemporaryDeliveryCertificateRelationEntityToTemporaryDeliveryCertificateRelation(e)) : undefined,
        individuals: input.individuals ? input.individuals.map(e => IndividualEntityToReleaseRecord(e)) : undefined,

    }

}

export function NecropsyEntityToDomain(input: NecropsyEntity): Necropsy {
    return {
        id: input.id,
        date: input.date,
        deadDate: input.deadDate,
        hour: input.hour,
        anamnesis: input.anamnesis,
        clinicalDiagnosis: input.clinicalDiagnosis,
        additionalData: input.additionalData,
        macroscopicFindings: input.macroscopicFindings,
        digestiveSystem: input.digestiveSystem ? input.digestiveSystem : undefined!,
        urinarySystem: input.urinarySystem ? input.urinarySystem : undefined!,
        reproductiveSystem: input.reproductiveSystem ? input.reproductiveSystem : undefined!,
        cardiovascularSystem: input.cardiovascularSystem ? input.cardiovascularSystem : undefined!,
        respiratorySystem: input.respiratorySystem ? input.respiratorySystem : undefined!,
        nervousSystem: input.nervousSystem ? input.nervousSystem : undefined!,
        muscularAndSkeletalSystem: input.muscularAndSkeletalSystem ? input.muscularAndSkeletalSystem : undefined!,
        lymphoidOrgans: input.lymphoidOrgans ? input.lymphoidOrgans : undefined!,
        skinAndAnnexes: input.skinAndAnnexes ? input.skinAndAnnexes : undefined!,
        pathology: input.pathology,
        presumptiveDiagnosis: input.presumptiveDiagnosis,
        finalDiagnosis: input.finalDiagnosis,
        differentialDiagnosis: input.differentialDiagnosis,
        collectedSamples: input.collectedSamples ? (() => {
            try {
                return JSON.parse(input.collectedSamples);
            } catch (e) {
                return input.collectedSamples;
            }
        })() : null,
        labSampleOrders: input.labSampleOrders ? input.labSampleOrders.map(el => labSampleOrderEntityToLabSampleOrder(el)) : undefined,
        others: input.others ? input.others : undefined!,
        preliminaryClinicHistory: input.preliminaryClinicHistory ? PreliminaryClinicHistoryEntityToIndividual(input.preliminaryClinicHistory) : undefined,
        actors: input.actors?.map(e => ActorEntityToReleaseRecord(e)),
        specimen: input.specimen ? SpecimenEntityToDomain(input.specimen) : undefined!,
        pictures: input.pictures ? input.pictures.map(e => PictureEntityToDomain(e)) : [],
        createdById: input.createdById !== undefined ? input.createdById : undefined,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function NecropsyEntitySpecimen(input: NecropsyEntity): Necropsy {
    return {
        id: input.id,
        date: input.date,
        deadDate: input.deadDate,
        hour: input.hour,
        anamnesis: input.anamnesis,
        clinicalDiagnosis: input.clinicalDiagnosis,
        additionalData: input.additionalData,
        macroscopicFindings: input.macroscopicFindings,
        digestiveSystem: input.digestiveSystem ? input.digestiveSystem : undefined!,
        urinarySystem: input.urinarySystem ? input.urinarySystem : undefined!,
        reproductiveSystem: input.reproductiveSystem ? input.reproductiveSystem : undefined!,
        cardiovascularSystem: input.cardiovascularSystem ? input.cardiovascularSystem : undefined!,
        respiratorySystem: input.respiratorySystem ? input.respiratorySystem : undefined!,
        nervousSystem: input.nervousSystem ? input.nervousSystem : undefined!,
        muscularAndSkeletalSystem: input.muscularAndSkeletalSystem ? input.muscularAndSkeletalSystem : undefined!,
        lymphoidOrgans: input.lymphoidOrgans ? input.lymphoidOrgans : undefined!,
        skinAndAnnexes: input.skinAndAnnexes ? input.skinAndAnnexes : undefined!,
        pathology: input.pathology,
        presumptiveDiagnosis: input.presumptiveDiagnosis,
        finalDiagnosis: input.finalDiagnosis,
        differentialDiagnosis: input.differentialDiagnosis,
        collectedSamples: input.collectedSamples ? JSON.parse(input.collectedSamples) : null,
        labSampleOrders: input.labSampleOrders ? input.labSampleOrders.map(el => labSampleOrderEntityToLabSampleOrder(el)) : undefined,
        others: input.others ? input.others : undefined!,
        actors: input.actors ? input.actors.map(e => ActorEntityToReleaseRecord(e)) : [],
        specimen: undefined!,
        pictures: input.pictures ? input.pictures.map(e => PictureEntityToDomain(e)) : [],
        createdById: input.createdById !== undefined ? input.createdById : undefined,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function EuthanasiaEntityToSpecimen(input: EuthanasiaEntity): Euthanasia {
    return {
        id: input.id,
        date: input.date,
        hour: input.hour,
        preEuthanasiaUsed: <PreEuthanasia>input.preEuthanasiaUsed,
        preEuthanasiaMedicines: input.preEuthanasiaMedicines ? input.preEuthanasiaMedicines.map(e => MedicineEntityToDomain(e)) : [],
        euthanasiaMedicines: input.euthanasiaMedicines ? input.euthanasiaMedicines.map(e => MedicineEntityToDomain(e)) : [],
        actors: input.actors ? input.actors.map(e => ActorEntityToReleaseRecord(e)) : [],
        specimen: undefined!,
        pictures: input.pictures ? input.pictures.map(e => PictureEntityToDomain(e)) : [],
        vitalSigns: input.vitalSigns ? input.vitalSigns.map(e => VitalSignsEntityToDomain(e)) : [],
        observation: input.observation,
        reason: input.reason,
        euthanasiaProcess: <EuthanasiaProcess>input.euthanasiaProcess,
        euthanasiaMethod: <EuthanasiaMethod>input.euthanasiaMethod,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function EntryRecordEntityToEntryRecord(entity: EntryRecordEntity): EntryRecord {
    return {
        id: entity.id,
        createdAt: entity.createdAt,
        updatedAt: entity.updatedAt,
        deletedAt: entity.deletedAt,
        admissionDate: entity.admissionDate,
        preliminaryClinicHistory: entity.preliminaryClinicHistory ? PreliminaryClinicHistoryEntityToIndividual(entity.preliminaryClinicHistory) : undefined,
        receivingActor: entity.receivingActor ? ActorEntityToReleaseRecord(entity.receivingActor) : undefined,
        admissionType: <AdmissionType>entity.admissionType,
        CNIF: entity.CNIF,
        departureRecord: entity.departureRecord ? DepartureRecordEntityToDepartureRecord(entity.departureRecord) : undefined,
        deliveringActor: entity.deliveringActor ? ActorEntityToReleaseRecord(entity.deliveringActor) : undefined,
        location: entity.location,
        taxonomicGroup: entity.taxonomicGroup,
        specimen: entity.specimen ? SpecimenEntityToDomain(entity.specimen) : undefined,
        marking: entity.marking ? SpecimenMarkingEntityToSpecimenMarking(entity.marking) : undefined,
        registeringActor: entity.registeringActor ? ActorEntityToReleaseRecord(entity.registeringActor) : undefined,
    }
}

export function DepartureRecordEntityToDepartureRecord(entity: DepartureRecordEntity): DepartureRecord {
    return {
        id: entity.id,
        deletedAt: entity.deletedAt,
        updatedAt: entity.updatedAt,
        departureDate: entity.departureDate,
        departureType: <DepartureTypes>entity.departureType,
        entryRecord: entity.entryRecord ? EntryRecordEntityToEntryRecord(entity.entryRecord) : undefined,
        createdAt: entity.createdAt,
        destiny: <DepartureDestinies>entity.destiny,
        observations: entity.observations,
        preliminaryClinicHistory: entity.preliminaryClinicHistory ? PreliminaryClinicHistoryEntityToIndividual(entity.preliminaryClinicHistory) : undefined,
        finalDestiny: entity.finalDestiny,
        registeringActor: entity.registeringActor ? ActorEntityToReleaseRecord(entity.registeringActor) : undefined,
    }
}

export function SpecimenMarkingEntityToSpecimenMarking(entity: SpecimenMarkingEntity): SpecimenMarking {
    return {
        id: entity.id,
        markingDate: entity.markingDate,
        specimen: entity.specimen ? SpecimenEntityToDomain(entity.specimen) : undefined,
        markingNo: entity.markingNo,
        deletedAt: entity.deletedAt,
        updatedAt: entity.updatedAt,
        type: <MarkingTypes>entity.type,
        createdAt: entity.createdAt
    }
}

export function labSampleEntityToLabSample(entity: LabSampleEntity): LabSample {
    return {
        id: entity.id,
        sampleTakingActor: entity.sampleTakingActor ? ActorEntityToReleaseRecord(entity.sampleTakingActor) : entity.sampleTakingActor,
        resultRegisteringActor: entity.resultRegisteringActor ? ActorEntityToReleaseRecord(entity.resultRegisteringActor) : entity.resultRegisteringActor,
        labSampleOrder: entity.labSampleOrder ? labSampleOrderEntityToLabSampleOrder(entity.labSampleOrder) : undefined,
        type: <TestTypes>entity.type,
        sampleType: entity.sampleType ? labSampleTypeEntityToLabSampleType(entity.sampleType) : undefined,
        observations: entity.observations,
        quantity: entity.quantity,
        sampleResult: entity.sampleResult,
        resultDate: entity.resultDate,
        sampleTakingDate: entity.sampleTakingDate,
        sampleTakingPlace: entity.sampleTakingPlace,
        sampleTakingTime: entity.sampleTakingTime,
        typeDescription: entity.typeDescription,
        typeSpecifications: entity.typeSpecifications,
        attachment: entity.attachment && entity.attachment.fieldName ? PictureEntityToDomain(entity.attachment) : undefined,
        createdAt: entity.createdAt,
        updatedAt: entity.updatedAt,
        deletedAt: entity.deletedAt
    }
}

export function labSampleTypeEntityToLabSampleType(entity: LabSampleTypeEntity): LabSampleType {
    return {
        id: entity.id,
        labSamples: entity.labSamples ? entity.labSamples.map(el => labSampleEntityToLabSample(el)) : undefined,
        active: entity.active,
        name: entity.name,
        value: entity.value,
        deletedAt: entity.deletedAt,
        updatedAt: entity.updatedAt,
        createdAt: entity.createdAt,
        createdById: entity.createdById,
        updatedById: entity.updatedById
    };
}

export function labSampleOrderEntityToLabSampleOrder(entity: LabSampleOrderEntity): LabSampleOrder {
    return {
        id: entity.id,
        registeringActor: entity.registeringActor ? ActorEntityToReleaseRecord(entity.registeringActor) : undefined,
        labSamples: entity.labSamples ? entity.labSamples.map(el => labSampleEntityToLabSample(el)) : undefined,
        necropsy: entity.necropsy ? NecropsyEntityToDomain(entity.necropsy) : entity.necropsy,
        medicalExamination: entity.medicalExamination ? MedicalExaminationEntityToMedicalExamination(entity.medicalExamination) : entity.medicalExamination,
        preliminaryClinicHistory: entity.preliminaryClinicHistory ? PreliminaryClinicHistoryEntityToIndividual(entity.preliminaryClinicHistory) : undefined,
        attachment: entity.attachment && entity.attachment.fieldName ? PictureEntityToDomain(entity.attachment) : undefined,
        createdAt: entity.createdAt,
        updatedAt: entity.updatedAt,
        deletedAt: entity.deletedAt
    }
}

export function NeonatalMonitoringEntityToDomain(input: NeonatalMonitoringEntity): NeonatalMonitoring {
    return {
        id: input.id,
        createdAt: input.createdAt,
        lodgingConditions: input.lodgingConditions ? LodgingConditionEntityToNeonatalMonitoring(input.lodgingConditions) : undefined,
        monitoring: input.monitoring ? input.monitoring.map(e => MonitoringEntityToNeonatalMonitoring(e)) : [],
        preliminaryClinicHistory: input.preliminaryClinicHistory ? PreliminaryClinicHistoryEntityToIndividual(input.preliminaryClinicHistory) : undefined,
        actors: input.actors ? input.actors.map(e => ActorEntityToReleaseRecord(e)) : [],
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function DietEntityToNeonatalMonitoring(input: DietEntity): Diet {
    return {
        id: input.id,
        amount: input.amount,
        frequency: input.frequency,
        ingredients: input.ingredients,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function MonitoringEntityToNeonatalMonitoring(input: MonitoringEntity): Monitoring {
    return {
        id: input.id,
        date: input.date,
        hour: input.hour,
        weight: input.weight,
        weightType: <WeightType>input.weightType,
        urine: input.urine,
        stool: input.stool,
        observation: input.observation,
        respiration: input.respiration,
        dehydrationGrade: input.dehydrationGrade,
        corporalCondition: input.corporalCondition,
        temperature: input.temperature,
        consumption: input.consumption,
        registeringActor: input.registeringActor ? ActorEntityToReleaseRecord(input.registeringActor) : undefined,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function LodgingConditionEntityToNeonatalMonitoring(input: LodgingConditionEntity): LodgingCondition {
    return {
        id: input.id,
        lodgingType: input.lodgingType ? input.lodgingType : undefined,
        enclosure: input.enclosure ? input.enclosure : undefined,
        humidity: input.humidity ? input.humidity : undefined,
        recommendation: input.recommendation ? input.recommendation : undefined,
        temperature: input.temperature ? input.temperature : undefined,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function BiologicalManagementEntityToDomain(input: BiologicalManagementEntity): BiologicalManagement {
    return {
        id: input.id,
        date: input.date,
        specie: <SpecieBiological>input.specie,
        habit: <Habit>input.habit,
        aggressivenessLevel: <AggressivenessLevel>input.aggressivenessLevel,
        biologicalManagement: input.biologicalManagement,
        recommendation: input.recommendation,
        naturalDistribution: input.naturalDistribution,
        naturalDiet: input.naturalDiet,
        preliminaryClinicHistory: input.preliminaryClinicHistory ? PreliminaryClinicHistoryEntityToIndividual(input.preliminaryClinicHistory) : undefined,
        actors: input.actors ? input.actors.map(e => ActorEntityToReleaseRecord(e)) : [],
        medicalExaminationId: input.medicalExaminationId,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function RoutineEvaluationEntityToDomain(input: RoutineEvaluationEntity): RoutineEvaluation {
    return {
        id: input.id,
        date: input.date,
        startTime: input.startTime,
        endTime: input.endTime,
        generalEvaluation: undefined!,
        observations: input.observations,
        preliminaryClinicHistory: input.preliminaryClinicHistory ? PreliminaryClinicHistoryEntityToIndividual(input.preliminaryClinicHistory) : undefined,
        actors: input.actors ? input.actors.map(e => ActorEntityToReleaseRecord(e)) : [],
        physicalInjuriesEvaluation: undefined!,
        formFieldValues: input.formFieldValues?.map(e => FormFieldValueEntityToCaptivityHistory(e)),
        skinAndAdnexaEvaluation: undefined!,
        evidenceOfDisease: undefined!,
        physicalObservation: input.physicalObservation,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function DietManagementEntityToDomain(input: DietManagementEntity): DietManagement {
    return {
        id: input.id,
        date: input.date,
        type: input.type,
        dailyCost: input.dailyCost,
        actors: input.actors ? input.actors.map(e => ActorEntityToReleaseRecord(e)) : [],
        preliminaryClinicHistory: input.preliminaryClinicHistory ? PreliminaryClinicHistoryEntityToIndividual(input.preliminaryClinicHistory) : undefined,
        picture: input.picture ? PictureEntityToDomain(input.picture) : undefined,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function DiagnosticTestsEntityToDomain(entity: DiagnosticTestEntity): DiagnosticTests {
    return {
        id: entity.id,
        addedAt: entity.addedAt,
        observations: entity.observations,
        description: entity.description,
        clinicalData: entity.clinicalData,
        registeringActor: entity.registeringActor ? ActorEntityToReleaseRecord(entity.registeringActor) : undefined,
        quantity: entity.quantity,
        specifications: entity.specifications,
        typeTest: entity.typeTest,
        requestFrom: entity.requestFrom,
        preliminaryClinicHistory: entity.preliminaryClinicHistory ? PreliminaryClinicHistoryEntityToIndividual(entity.preliminaryClinicHistory) : undefined,
        createdAt: entity.createdAt,
        updatedAt: entity.updatedAt,
        deletedAt: entity.deletedAt
    }
}

export function LivingCostsEntityToDomain(input: LivingCostsEntity): LivingCosts {
    return {
        id: input.id,
        value: input.value,
        effectiveDate: input.effectiveDate,
        taxonomyGroup: input.taxonomyGroup,
        registeringActor: input.registeringActor ? ActorEntityToReleaseRecord(input.registeringActor) : undefined,
        updatingActorId: input.updatingActorId,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function enrichmentMaterialEntityToDomain(input: EnrichmentMaterialEntity): EnrichmentMaterial {
    return {
        id: input.id,
        name: input.name,
        quantity: input.quantity,
        unitValue: input.unitValue,
        totalValue: input.totalValue,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function HospitalizationAdmissionEntityToDomain(input: HospitalizationAdmissionEntity): HospitalizationAdmission {
    return {
        id: input.id,
        admissionType: <AdmissionTypeHospitalization>input.admissionType,
        time: input.time,
        date: input.date,
        dx: input.dx,
        weight: input.weight,
        weightType: <WeightType>input.weightType,
        hospitalizationDischarge: input.hospitalizationDischarge ? HospitalizationDischargeEntityToDomain(input.hospitalizationDischarge) : undefined,
        preliminaryClinicHistory: input.preliminaryClinicHistory ? PreliminaryClinicHistoryEntityToIndividual(input.preliminaryClinicHistory) : undefined,
        hospitalizationMonitoring: input.hospitalizationMonitoring ? input.hospitalizationMonitoring.map(e => HospitalizationMonitoringEntityToDomain(e)) : [],
        registeringActor: input.registeringActor ? ActorEntityToReleaseRecord(input.registeringActor) : undefined,
        treatment: input.treatment,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function HospitalizationDischargeEntityToDomain(input: HospitalizationDischargeEntity): HospitalizationDischarge {
    return {
        id: input.id,
        time: input.time,
        date: input.date,
        weight: input.weight,
        weightType: <WeightType>input.weightType,
        hospitalizationTime: input.hospitalizationTime,
        observations: input.observations,
        destination: input.destination,
        hospitalizationAdmission: input.hospitalizationAdmission ? HospitalizationAdmissionEntityToDomain(input.hospitalizationAdmission) : undefined,
        registeringActor: input.registeringActor ? ActorEntityToReleaseRecord(input.registeringActor) : undefined,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function HospitalizationMonitoringEntityToDomain(input: HospitalizationMonitoringEntity): HospitalizationMonitoring {
    return {
        id: input.id,
        date: input.date,
        time: input.time,
        appetite: <Selection>input.appetite,
        attitude: input.attitude,
        cardiacFrequency: input.cardiacFrequency,
        dehydrationPercentage: input.dehydrationPercentage,
        fecalMatter: input.fecalMatter,
        fluidTherapy: input.fluidTherapy,
        observations: input.observations,
        water: input.water,
        mucosalColor: input.mucosalColor,
        pulseQuality: <Selection>input.pulseQuality,
        respiratoryRate: input.respiratoryRate,
        specialInstructions: input.specialInstructions,
        temperature: input.temperature,
        urine: input.urine,
        temperament: input.temperament,
        vomit: input.vomit,
        hospitalizationAdmission: input.hospitalizationAdmission ? HospitalizationAdmissionEntityToDomain(input.hospitalizationAdmission) : undefined,
        registeringActor: input.registeringActor ? ActorEntityToReleaseRecord(input.registeringActor) : undefined,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function SamplingEntityToDomain(input: SamplingEntity): Sampling {
    return {
        id: input.id,
        hour: input.hour,
        codes: input.codes ?
            (() => {
                try {
                    return JSON.parse(input.codes + '');
                } catch (err) {
                    return input.codes;
                }
            })() : undefined,
        note: input.note,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function EthogramEntityToDomain(input: EthogramEntity): Ethogram {
    return {
        id: input.id,
        behaviors: input.behaviors ? input.behaviors.map(e => BehaviorEthogramEntityToDomain(e)) : [],
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function MaterialEntityToDomain(input: MaterialEntity): Material {
    return {
        id: input.id,
        material: input.material ? enrichmentMaterialEntityToDomain(input.material) : undefined,
        observation: input.observation,
        quantity: input.quantity,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function DietProvidedToDomain(input: DietProvidedEntity): DietProvided {
    return {
        id: input.id,
        preliminaryClinicHistories: input.preliminaryClinicHistories ? input.preliminaryClinicHistories.map(e => PreliminaryClinicHistoryEntityToIndividual(e)) : [],
        registeringActor: input.registeringActor ? ActorEntityToReleaseRecord(input.registeringActor) : undefined,
        date: input.date,
        weight: input.weight,
        observations: input.observations,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function EnrichmentManagementEntityToDomain(input: EnrichmentManagementEntity): EnrichmentManagement {
    return {
        id: input.id,
        date: input.date,
        time: input.time,
        categories: input.categories,
        location: input.location,
        specie: input.specie ? SpecieEntityToDomain(input.specie) : undefined,
        clinicHistories: input.clinicHistories !== undefined ? input.clinicHistories.map(history => PreliminaryClinicHistoryEntityToIndividual(history)) : undefined,
        materials: input.materials ? input.materials.map(e => MaterialEntityToDomain(e)) : undefined,
        description: input.description,
        consideration: input.consideration,
        photographicRegister: (input.photographicRegister !== undefined && input.photographicRegister.length > 0) ? input.photographicRegister.map(register => EnrichmentManagementPhotographicRegisterEntityToDomain(register)) : [],
        objective: input.objective,
        registeringActor: input.registeringActor ? ActorEntityToReleaseRecord(input.registeringActor) : undefined,
        deletedAt: input.deletedAt,
        updatedAt: input.updatedAt,
        createdAt: input.createdAt
    }
}

export function EnrichmentManagementPhotographicRegisterEntityToDomain(input: EnrichmentManagementPhotographicRegisterEntity): EnrichmentManagementPhotoGraphicRegister {
    return {
        date: input.date,
        detail: input.detail,
        images: (input.images !== undefined && input.images.length > 0) ? input.images.map(image => AttachmentRepository.attachmentEntityToDomainAttachment(image)) : [],
        registeringActorId: input.registeringActorId
    }
}

export function TemporaryDeliveryCertificateRelationEntityToTemporaryDeliveryCertificateRelation(entity: TemporaryDeliveryCertificateRelationEntity): TemporaryDeliveryCertificateRelation {
    return {
        id: entity.id,
        temporaryDeliveryCertificate: entity.temporaryDeliveryCertificate ? TemporaryDeliveryCertificateToDomain(entity.temporaryDeliveryCertificate) : undefined,
        preliminaryClinicHistory: entity.relatedPreliminaryClinic ? PreliminaryClinicHistoryEntityToIndividual(entity.relatedPreliminaryClinic) : undefined,
        createdAt: entity.createdAt,
        updatedAt: entity.updatedAt,
        deletedAt: entity.deletedAt
    }
}

export function TemporaryDeliveryCertificateToDomain(input: TemporaryDeliveryCertificateEntity): TemporaryDeliveryCertificate {
    return {
        id: input.id,
        date: input.date,
        quantity: input.quantity,
        destination: input.destination,
        relatedPreliminaryClinic: input.relationTemporary ? input.relationTemporary.map(el => TemporaryDeliveryCertificateRelationEntityToTemporaryDeliveryCertificateRelation(el)) : undefined,
        file: input.file ? PictureEntityToDomain(input.file) : undefined,
        registeringActor: input.registeringActor ? ActorEntityToReleaseRecord(input.registeringActor) : undefined,
        deletedAt: input.deletedAt,
        updatedAt: input.updatedAt,
        createdAt: input.createdAt
    }
}

export function ResidueDietToDomain(input: ResidueDietEntity): ResidueDiet {
    return {
        id: input.id,
        preliminaryClinicHistories: input.preliminaryClinicHistories ? input.preliminaryClinicHistories.map(e => PreliminaryClinicHistoryEntityToIndividual(e)) : undefined,
        registeringActor: input.registeringActor ? ActorEntityToReleaseRecord(input.registeringActor) : undefined,
        date: input.date,
        weight: input.weight,
        observations: input.observations,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function QuarantineDepartureToDomain(input: QuarantineDepartureEntity): QuarantineDeparture {
    return {
        id: input.id,
        quarantineEntry: input.quarantineEntry ? QuarantineEntryToDomain(input.quarantineEntry) : undefined,
        departureTime: input.departureTime,
        departureDate: input.departureDate,
        preliminaryClinicHistory: input.preliminaryClinicHistory ? PreliminaryClinicHistoryEntityToIndividual(input.preliminaryClinicHistory) : undefined,
        quarantineTimeOnDays: input.quarantineTimeOnDays,
        weight: input.weight,
        weightType: input.weightType as WeightType,
        destiny: input.destiny,
        observations: input.observations,
        registeringActor: input.registeringActor ? ActorEntityToReleaseRecord(input.registeringActor) : undefined,
        deletedAt: input.deletedAt,
        updatedAt: input.updatedAt,
        createdAt: input.createdAt
    }
}

export function QuarantineEntryToDomain(input: QuarantineEntryEntity): QuarantineEntry {
    return {
        id: input.id,
        quarantineDeparture: input.quarantineDeparture ? QuarantineDepartureToDomain(input.quarantineDeparture) : undefined,
        entryDate: input.entryDate,
        entryTime: input.entryTime,
        quarantineType: input.quarantineType as QuarantineType,
        enclosureSpace: input.enclosureSpace,
        groupPreliminaryClinicHistories: input.groupPreliminaryClinicHistories ?
            (() => {
                try {
                    return JSON.parse(input.groupPreliminaryClinicHistories + '');
                } catch (err) {
                    return input.groupPreliminaryClinicHistories;
                }
            })() : undefined,
        weight: input.weight,
        weightType: input.weightType as WeightType,
        preliminaryClinicHistory: input.preliminaryClinicHistory ? PreliminaryClinicHistoryEntityToIndividual(input.preliminaryClinicHistory) : undefined,
        registeringActor: input.registeringActor ? ActorEntityToReleaseRecord(input.registeringActor) : undefined,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }

}

export function DrugConfigurationEntityToDomain(input: DrugConfigurationEntity): DrugConfiguration {
    return {
        id: input.id,
        denomination: input.denomination,
        state: input.state,
        type: input.type ? DrugTypeEntityToDomain(input.type) : undefined,
        quantity: input.quantity,
        unit: input.unit,
        value: input.value,
        registeringActor: input.registeringActor ? ActorEntityToReleaseRecord(input.registeringActor) : undefined,
        deletedAt: input.deletedAt,
        updatedAt: input.updatedAt,
        createdAt: input.createdAt
    }
}

export function DrugTypeEntityToDomain(input: DrugTypeEntity): DrugType {
    return {
        id: input.id,
        name: input.name,
        drugConfigurations: input.drugConfigurations ? input.drugConfigurations.map(el => DrugConfigurationEntityToDomain(el)) : undefined,
        description: input.description,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function TherapeuticSupplyEntityToDomain(input: TherapeuticSupplyEntity): TherapeuticSupply {
    return {
        id: input.id,
        date: input.date,
        hour: input.hour,
        observation: input.observation,
        createdById: input.createdById,
        deletedAt: input.deletedAt,
        updatedAt: input.updatedAt,
        createdAt: input.createdAt
    }
}

export function TherapeuticMedicineEntityToDomain(input: TherapeuticMedicineEntity): TherapeuticMedicine {
    return {
        id: input.id,
        denomination: input.denomination,
        dose: input.dose,
        quantity: input.quantity,
        administrationRoute: input.administrationRoute,
        time: input.time,
        frequency: input.frequency,
        indication: input.indication,
        frequencyUnit: <TherapeuticMedicineUnit>input.frequencyUnit,
        supplies: input.supplies ? input.supplies.map(e => TherapeuticSupplyEntityToDomain(e)) : [],
        timeUnit: <TherapeuticMedicineUnit>input.timeUnit,
        deletedAt: input.deletedAt,
        updatedAt: input.updatedAt,
        createdAt: input.createdAt
    }
}

export function TherapeuticEntityToDomain(input: TherapeuticEntity): Therapeutic {
    return {
        id: input.id,
        date: input.date,
        request: <TherapeuticRequest>input.request,
        registration: input.registration,
        total: input.total,
        registeringActor: input.registeringActor ? ActorEntityToReleaseRecord(input.registeringActor) : undefined,
        clinicHistory: input.clinicHistory ? PreliminaryClinicHistoryEntityToIndividual(input.clinicHistory) : undefined,
        medicines: input.medicines ? input.medicines.map(e => TherapeuticMedicineEntityToDomain(e)) : [],
        deletedAt: input.deletedAt,
        updatedAt: input.updatedAt,
        createdAt: input.createdAt
    }
}

export function BehaviorEthogramEntityToDomain(input: BehaviorEthogramEntity): BehaviorEthogram {
    return {
        id: input.id,
        registrationDate: input.registrationDate,
        startDate: input.startDate,
        endDate: input.endDate,
        specie: input.specie ? SpecieEntityToDomain(input.specie) : undefined,
        method: input.method,
        frequencies: input.frequencies ? input.frequencies.map(e => BehaviorFrequencyEntityToDomain(e)) : [],
        individuals: input.individuals ? input.individuals.map(e => IndividualEntityToReleaseRecord(e)) : [],
        registeringActor: input.registeringActor ? ActorEntityToReleaseRecord(input.registeringActor) : undefined,
        codes: input.codes ? input.codes.map(e => EthogramCodeEntityToDomain(e)) : [],
        clinicHistories: input.clinicHistories ? input.clinicHistories.map(e => ClinicHistoryTempEntityToDomain(e)) : [],
        scientificName: input.scientificName,
        behavior: input.behavior,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function EthogramCodeEntityToDomain(input: EthogramCodeEntity): EthogramCode {
    return {
        id: input.id,
        code: input.code,
        description: input.description,
        note: input.note,
        module: input.module,
        pattern: input.pattern,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}


export function BehaviorFrequencyEntityToDomain(input: BehaviorFrequencyEntity): BehaviorFrequency {
    return {
        id: input.id,
        evaluationDate: input.evaluationDate,
        clinicHistoryIndividuals: input.clinicHistoryIndividuals ? input.clinicHistoryIndividuals.map(e => ClinicHistoryTempEntityToDomain(e)) : [],
        endHour: input.endHour,
        sampleQuantity: input.sampleQuantity,
        startHour: input.startHour,
        observers: input.observers ? input.observers.map(e => ActorEntityToReleaseRecord(e)) : [],
        samplings: input.samplings ? input.samplings.map(e => SamplingEntityToDomain(e)) : [],
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function ClinicHistoryTempEntityToDomain(input: ClinicHistoryEntity): ClinicHistory {
    return {
        id: input.id,
        preliminaryClinicHistory: input.preliminaryClinicHistory ? PreliminaryClinicHistoryEntityToIndividual(input.preliminaryClinicHistory) : undefined,
        specimen: input.specimen ? SpecimenEntityToDomain(input.specimen) : undefined,
        status: <ClinicHistoryStatus>input.status,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function clinicRecordEntityToDomain(entity: ClinicRecordEntity): ClinicRecord {
    return {
        id: entity.id,
        recordId: entity.recordId,
        recordType: <ClinicRecordType>entity.recordType,
        clinicHistory: entity.clinicHistory ? ClinicHistoryTempEntityToDomain(entity.clinicHistory) : undefined,
        createdAt: entity.createdAt,
        updatedAt: entity.updatedAt,
        deletedAt: entity.deletedAt
    }
}

export function CriticalCareAdmissionEntityToDomain(input: CriticalCareAdmissionEntity): CriticalCareAdmission {
    return {
        id: input.id,
        admissionDate: input.admissionDate,
        classification: input.classification,
        dx: input.dx,
        securityLevel: input.securityLevel,
        diet: input.diet,
        specialSafetyRequirements: input.specialSafetyRequirements,
        monitoringFrequency: input.monitoringFrequency,
        specialAttention: input.specialAttention,
        specialHousingRequirements: input.specialHousingRequirements,
        preliminaryClinicHistory: input.preliminaryClinicHistory ? PreliminaryClinicHistoryEntityToIndividual(input.preliminaryClinicHistory) : undefined,
        registeringActor: input.registeringActor ? ActorEntityToReleaseRecord(input.registeringActor) : undefined,
        criticalCareDischarge: input.criticalCareDischarge ? CriticalCareDischargeEntityToDomain(input.criticalCareDischarge) : undefined,
        criticalCareMonitoring: input.criticalCareMonitoring ? input.criticalCareMonitoring.map(e => CriticalCareMonitoringEntityToDomain(e)) : [],
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function CriticalCareDischargeEntityToDomain(input: CriticalCareDischargeEntity): CriticalCareDischarge {
    return {
        id: input.id,
        criticalCareTime: input.criticalCareTime,
        dischargeDate: input.dischargeDate,
        observations: input.observations,
        criticalCareAdmission: input.criticalCareAdmission ? CriticalCareAdmissionEntityToDomain(input.criticalCareAdmission) : undefined,
        registeringActor: input.registeringActor ? ActorEntityToReleaseRecord(input.registeringActor) : undefined,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function CriticalCareMonitoringEntityToDomain(input: CriticalCareMonitoringEntity): CriticalCareMonitoring {
    return {
        id: input.id,
        date: input.date,
        time: input.time,
        appetite: <Selection>input.appetite,
        attitude: input.attitude,
        cardiacFrequency: input.cardiacFrequency,
        dehydrationPercentage: input.dehydrationPercentage,
        fecalMatter: input.fecalMatter,
        fluidTherapy: input.fluidTherapy,
        observations: input.observations,
        mucosalColor: input.mucosalColor,
        water: input.water,
        pulseQuality: <Selection>input.pulseQuality,
        respiratoryRate: input.respiratoryRate,
        specialInstructions: input.specialInstructions,
        temperature: input.temperature,
        urine: input.urine,
        temperament: input.temperament,
        vomit: input.vomit,
        criticalCareAdmission: input.criticalCareAdmission ? CriticalCareAdmissionEntityToDomain(input.criticalCareAdmission) : undefined,
        registeringActor: input.registeringActor ? ActorEntityToReleaseRecord(input.registeringActor) : undefined,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function BiologicalConceptEntityToDomain(input: BiologicalConceptEntity): BiologicalConcept {
    return {
        id: input.id,
        bibliographicalReference: input.bibliographicalReference,
        classT: input.classT,
        description: input.description,
        commonProblems: input.commonProblems,
        family: input.family,
        geographicDistribution: input.geographicDistribution,
        importance: input.importance,
        kingdom: input.kingdom,
        naturalHistory: input.naturalHistory,
        order: input.order,
        phylum: input.phylum,
        requirements: input.requirements,
        evolution: input.evolution,
        subSpecie: input.subSpecie,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function ZootechnicalConceptEntityToDomain(input: ZootechnicalConceptEntity): ZootechnicalConcept {
    return {
        id: input.id,
        date: input.date,
        nutritionalEvaluation: input.nutritionalEvaluation,
        nutritionalHistory: input.nutritionalHistory,
        preliminaryClinicHistory: input.preliminaryClinicHistory ? PreliminaryClinicHistoryEntityToIndividual(input.preliminaryClinicHistory) : undefined,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function VeterinaryConceptEntityToDomain(input: VeterinaryConceptEntity): VeterinaryConcept {
    return {
        id: input.id,
        clinicalFollowup: input.clinicalFollowup,
        preliminaryClinicHistory: input.preliminaryClinicHistory ? PreliminaryClinicHistoryEntityToIndividual(input.preliminaryClinicHistory) : undefined,
        currentLocation: input.currentLocation,
        currentStatus: input.currentStatus,
        history: input.history,
        status: input.status,
        quarantinePeriod: input.quarantinePeriod,
        recommendations: input.recommendations,
        pictures: input.pictures ? input.pictures.map(e => PictureEntityToDomain(e)) : [],
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function DestinationEntityToDomain(input: DestinationEntity): Destination {
    return {
        id: input.id,
        name: input.name,
        whichFinalDisposition: input.whichFinalDisposition,
        chemicalRestraint: input.chemicalRestraint,
        fasting: input.fasting,
        finalDisposition: input.finalDisposition,
        handlingDuring: input.handlingDuring,
        identification: input.identification,
        onArrivalHandling: input.onArrivalHandling,
        packaging: input.packaging,
        position: input.position,
        site: input.site,
        responsible: input.responsible,
        transport: input.transport,
        siteCharacteristics: input.siteCharacteristics,
        destiny: <Destiny>input.destiny,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function BiologicalVeterinaryConceptEntityToDomain(input: BiologicalVeterinaryConceptEntity): BiologicalVeterinaryConcept {
    return {
        id: input.id,
        date: input.date,
        quantity: input.quantity,
        biologicalConcept: input.biologicalConcept ? BiologicalConceptEntityToDomain(input.biologicalConcept) : undefined,
        destination: input.destination ? DestinationEntityToDomain(input.destination) : undefined,
        specie: input.specie ? SpecieEntityToDomain(input.specie) : undefined,
        genus: input.genus ? GenusEntityToDomain(input.genus) : undefined,
        scientificName: input.scientificName,
        veterinaryConcepts: input.veterinaryConcepts ? input.veterinaryConcepts.map(e => VeterinaryConceptEntityToDomain(e)) : [],
        zootechnicalConcepts: input.zootechnicalConcepts ? input.zootechnicalConcepts.map(e => ZootechnicalConceptEntityToDomain(e)) : [],
        registeringActor: input.registeringActor ? ActorEntityToReleaseRecord(input.registeringActor) : undefined,
        updatedBy: input.updatedBy ? ActorEntityToReleaseRecord(input.updatedBy) : undefined,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function KingdomEntityToDomain(input: KingdomEntity): Kingdom {
    return {
        id: input.id,
        name: input.name,
        status: input.status,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function OrderEntityToDomain(input: OrderEntity): Order {
    return {
        id: input.id,
        name: input.name,
        status: input.status,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function PhylumEntityToDomain(input: PhylumEntity): Phylum {
    return {
        id: input.id,
        name: input.name,
        status: input.status,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function FamilyEntityToDomain(input: FamilyEntity): Family {
    return {
        id: input.id,
        name: input.name,
        status: input.status,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function SubSpecieEntityToDomain(input: SubSpecieEntity): SubSpecie {
    return {
        id: input.id,
        name: input.name,
        status: input.status,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function FinalDispositionEntityToDomain(input: FinalDispositionEntity): FinalDisposition {
    return {
        id: input.id,
        name: input.name,
        status: input.status,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function ClassTEntityToDomain(input: ClassTEntity): ClassT {
    return {
        id: input.id,
        name: input.name,
        status: input.status,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}

export function DietTypeEntityToDomain(input: DietTypeEntity): DietType {
    return {
        id: input.id,
        name: input.name,
        status: input.status,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    }
}