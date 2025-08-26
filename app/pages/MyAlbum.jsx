import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  Platform,
  Alert,
  Modal,
  FlatList,
  TextInput,
} from "react-native";
import { styles } from "./MyAlbum.styles";

// colors 객체 정의 (스타일 파일에서 가져옴)
const colors = {
  primary: "#8B7355", // 모카 무스의
  secondary: "#D4C4A8", // 밝은 모카
  accent: "#5D4E37", // 진한 모카
  white: "#FFFFFF",
  black: "#1A1A1A",
  gray: "#F5F5F5",
  darkGray: "#666666",
  lightGray: "#E8E8E8",
  overlay: "rgba(26, 26, 26, 0.3)",
  paperWhite: "#F0F0F0",
  inkBlack: "#333333",
  overlayLight: "rgba(255, 255, 255, 0.2)",
  traditionalBlack: "#222222",
  hanjiDark: "#999999",
  error: "#E74C3C",
  success: "#27AE60",
};

const { width, height } = Dimensions.get("window");

const MyAlbum = ({ navigation }) => {
  // 임시 데이터 - 실제로는 MinwhaTrans에서 저장된 이미지들이 들어올 예정
  const [savedImages, setSavedImages] = useState([
    {
      id: 1,
      image: require("../public/일월오봉도.webp"),
      title: "일월오봉도 변환",
      timestamp: "2025.01.15 14:30",
      category: "풍경화",
    },
    {
      id: 2,
      image: require("../public/호랑이와 까치.jpg"),
      title: "호랑이와 까치 변환",
      timestamp: "2025.01.14 16:45",
      category: "동물화",
    },
    {
      id: 3,
      image: require("../public/청자.jpeg"),
      title: "청자 도자기 변환",
      timestamp: "2025.01.13 11:20",
      category: "정물화",
    },
    {
      id: 4,
      image: require("../public/songhakdo.jpg"),
      title: "송학도 변환",
      timestamp: "2025.01.12 09:15",
      category: "풍경화",
    },
  ]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [customCategories, setCustomCategories] = useState([
    "풍경화",
    "동물화",
    "정물화",
  ]);
  const [showCategoryEditModal, setShowCategoryEditModal] = useState(false);
  const [editingImageId, setEditingImageId] = useState(null);

  // 이미지 상세보기
  const handleImagePress = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  // 이미지 삭제
  const handleDeleteImage = (imageId) => {
    Alert.alert("이미지 삭제", "이 이미지를 앨범에서 삭제하시겠습니까?", [
      { text: "취소", style: "cancel" },
      {
        text: "삭제",
        style: "destructive",
        onPress: () => {
          setSavedImages((prev) => prev.filter((img) => img.id !== imageId));
          if (selectedImage && selectedImage.id === imageId) {
            handleCloseModal();
          }
          Alert.alert("삭제 완료", "이미지가 앨범에서 삭제되었습니다.");
        },
      },
    ]);
  };

  // 이미지 공유
  const handleShareImage = (image) => {
    Alert.alert("공유", `${image.title} 이미지를 공유합니다.`);
  };

  // 뷰 모드 변경
  const toggleViewMode = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid");
  };

  // 카테고리 선택
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // 카테고리 생성 모달 열기
  const handleAddCategory = () => {
    setShowCategoryModal(true);
  };

  // 카테고리 생성
  const handleCreateCategory = () => {
    if (
      newCategoryName.trim() &&
      !customCategories.includes(newCategoryName.trim())
    ) {
      setCustomCategories((prev) => [...prev, newCategoryName.trim()]);
      setNewCategoryName("");
      setShowCategoryModal(false);
      Alert.alert("카테고리 생성", "새 카테고리가 생성되었습니다.");
    } else if (customCategories.includes(newCategoryName.trim())) {
      Alert.alert("오류", "이미 존재하는 카테고리입니다.");
    } else {
      Alert.alert("오류", "카테고리 이름을 입력해주세요.");
    }
  };

  // 카테고리 삭제
  const handleDeleteCategory = (categoryToDelete) => {
    if (categoryToDelete === "전체") {
      Alert.alert("오류", "전체 카테고리는 삭제할 수 없습니다.");
      return;
    }

    Alert.alert(
      "카테고리 삭제",
      `"${categoryToDelete}" 카테고리를 삭제하시겠습니까?\n이 카테고리의 이미지들은 "전체"로 이동됩니다.`,
      [
        { text: "취소", style: "cancel" },
        {
          text: "삭제",
          style: "destructive",
          onPress: () => {
            setCustomCategories((prev) =>
              prev.filter((cat) => cat !== categoryToDelete)
            );
            setSavedImages((prev) =>
              prev.map((img) =>
                img.category === categoryToDelete
                  ? { ...img, category: "미분류" }
                  : img
              )
            );
            if (selectedCategory === categoryToDelete) {
              setSelectedCategory("전체");
            }
            Alert.alert("삭제 완료", "카테고리가 삭제되었습니다.");
          },
        },
      ]
    );
  };

  // 필터링된 이미지 목록
  const filteredImages =
    selectedCategory === "전체"
      ? savedImages
      : savedImages.filter((img) => img.category === selectedCategory);

  // 카테고리 수정 모달 열기
  const handleEditCategory = (imageId) => {
    setEditingImageId(imageId);
    setShowCategoryEditModal(true);
  };

  // 카테고리 수정
  const handleUpdateImageCategory = (newCategory) => {
    setSavedImages((prev) =>
      prev.map((img) =>
        img.id === editingImageId ? { ...img, category: newCategory } : img
      )
    );
    setShowCategoryEditModal(false);
    setEditingImageId(null);
    Alert.alert("카테고리 수정", "이미지 카테고리가 수정되었습니다.");
  };

  // 현재 편집 중인 이미지 정보
  const editingImage = savedImages.find((img) => img.id === editingImageId);

  // 이미지 렌더링 (그리드 모드)
  const renderGridItem = ({ item }) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => handleImagePress(item)}
    >
      <Image source={item.image} style={styles.gridImage} resizeMode="cover" />
      <View style={styles.gridImageOverlay}>
        <Text style={styles.gridImageTitle}>{item.title}</Text>
        <Text style={styles.gridImageTimestamp}>{item.timestamp}</Text>
      </View>
    </TouchableOpacity>
  );

  // 이미지 렌더링 (리스트 모드)
  const renderListItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => handleImagePress(item)}
    >
      <Image source={item.image} style={styles.listImage} resizeMode="cover" />
      <View style={styles.listItemInfo}>
        <Text style={styles.listItemTitle}>{item.title}</Text>
        <Text style={styles.listItemCategory}>{item.category}</Text>
        <Text style={styles.listItemTimestamp}>{item.timestamp}</Text>
      </View>
      <View style={styles.listItemActions}>
        <TouchableOpacity
          style={styles.listActionButton}
          onPress={() => handleShareImage(item)}
        >
          <Text style={styles.listActionButtonText}>공유</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.listActionButton, styles.deleteButton]}
          onPress={() => handleDeleteImage(item.id)}
        >
          <Text style={[styles.listActionButtonText, styles.deleteButtonText]}>
            삭제
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>내 앨범</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity
            style={styles.transformButton}
            onPress={() => navigation.navigate("MinwhaTrans")}
          >
            <Text style={styles.transformButtonText}>민화변환</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.viewModeButton}
            onPress={toggleViewMode}
          >
            <Text style={styles.viewModeButtonText}>
              {viewMode === "grid" ? "📋" : "🔲"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 카테고리 필터 */}
      <View style={styles.categoryContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScrollContent}
        >
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === "전체" && styles.categoryButtonActive,
            ]}
            onPress={() => handleCategorySelect("전체")}
          >
            <Text
              style={[
                styles.categoryButtonText,
                selectedCategory === "전체" && styles.categoryButtonTextActive,
              ]}
            >
              전체 ({savedImages.length})
            </Text>
          </TouchableOpacity>

          {customCategories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.categoryButtonActive,
              ]}
              onPress={() => handleCategorySelect(category)}
              onLongPress={() => handleDeleteCategory(category)}
            >
              <Text
                style={[
                  styles.categoryButtonText,
                  selectedCategory === category &&
                    styles.categoryButtonTextActive,
                ]}
              >
                {category} (
                {savedImages.filter((img) => img.category === category).length})
              </Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity
            style={styles.addCategoryButton}
            onPress={handleAddCategory}
          >
            <Text style={styles.addCategoryButtonText}>+</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* 이미지 목록 */}
      {filteredImages.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateIcon}>📸</Text>
          <Text style={styles.emptyStateTitle}>앨범이 비어있습니다</Text>
          <Text style={styles.emptyStateText}>
            민화 변환에서 이미지를 저장해보세요
          </Text>
          <TouchableOpacity
            style={styles.emptyStateButton}
            onPress={() => navigation.navigate("MinwhaTrans")}
          >
            <Text style={styles.emptyStateButtonText}>민화 변환하기</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={filteredImages}
          renderItem={viewMode === "grid" ? renderGridItem : renderListItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={viewMode === "grid" ? 6 : 1}
          contentContainerStyle={styles.imageList}
          showsVerticalScrollIndicator={false}
        />
      )}

      {/* 이미지 상세보기 모달 */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                {selectedImage?.title || "이미지 상세보기"}
              </Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={handleCloseModal}
              >
                <Text style={styles.closeButtonText}>×</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.modalImageContainer}>
              <Image
                source={selectedImage?.image}
                style={styles.modalImage}
                resizeMode="contain"
              />
            </View>

            <View style={styles.modalInfo}>
              <View style={styles.modalCategoryRow}>
                <Text style={styles.modalCategory}>
                  카테고리: {selectedImage?.category}
                </Text>
                <TouchableOpacity
                  style={styles.editCategoryButton}
                  onPress={() => handleEditCategory(selectedImage?.id)}
                >
                  <Text style={styles.editCategoryButtonText}>수정</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.modalTimestamp}>
                저장일: {selectedImage?.timestamp}
              </Text>
            </View>

            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.modalActionButton}
                onPress={() => {
                  handleShareImage(selectedImage);
                  handleCloseModal();
                }}
              >
                <Text style={styles.modalActionButtonText}>공유</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalActionButton, styles.deleteButton]}
                onPress={() => {
                  handleDeleteImage(selectedImage?.id);
                }}
              >
                <Text
                  style={[
                    styles.modalActionButtonText,
                    styles.deleteButtonText,
                  ]}
                >
                  삭제
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* 카테고리 생성 모달 */}
      <Modal
        visible={showCategoryModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowCategoryModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.categoryModalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>새 카테고리 생성</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setShowCategoryModal(false)}
              >
                <Text style={styles.closeButtonText}>×</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.categoryModalBody}>
              <Text style={styles.categoryModalLabel}>카테고리 이름</Text>
              <TextInput
                style={styles.categoryModalInput}
                placeholder="카테고리 이름을 입력하세요"
                value={newCategoryName}
                onChangeText={setNewCategoryName}
                placeholderTextColor={colors.darkGray}
              />
            </View>

            <View style={styles.modalActions}>
              <TouchableOpacity
                style={[styles.modalActionButton, styles.cancelButton]}
                onPress={() => setShowCategoryModal(false)}
              >
                <Text
                  style={[
                    styles.modalActionButtonText,
                    styles.cancelButtonText,
                  ]}
                >
                  취소
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalActionButton}
                onPress={handleCreateCategory}
              >
                <Text style={styles.modalActionButtonText}>생성</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* 카테고리 수정 모달 */}
      <Modal
        visible={showCategoryEditModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowCategoryEditModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.categoryModalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>카테고리 수정</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setShowCategoryEditModal(false)}
              >
                <Text style={styles.closeButtonText}>×</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.categoryModalBody}>
              <Text style={styles.categoryModalLabel}>
                현재 카테고리: {editingImage?.category}
              </Text>
              <Text style={styles.categoryModalSubLabel}>
                새로운 카테고리를 선택하세요
              </Text>

              <ScrollView style={styles.categorySelectionList}>
                {customCategories.map((category) => (
                  <TouchableOpacity
                    key={category}
                    style={[
                      styles.categorySelectionItem,
                      editingImage?.category === category &&
                        styles.categorySelectionItemActive,
                    ]}
                    onPress={() => handleUpdateImageCategory(category)}
                  >
                    <Text
                      style={[
                        styles.categorySelectionItemText,
                        editingImage?.category === category &&
                          styles.categorySelectionItemTextActive,
                      ]}
                    >
                      {category}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MyAlbum;
