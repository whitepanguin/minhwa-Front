import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

// HomeScreen과 동일한 색상 팔레트 사용
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

export const styles = StyleSheet.create({
  // 전체 컨테이너
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  // 헤더 스타일
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "web" ? 20 : 50,
    paddingHorizontal: width * 0.04,
    paddingBottom: height * 0.02,
    backgroundColor: colors.white,
    zIndex: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  backButton: {
    width: Math.min(width * 0.08, 40),
    height: Math.min(width * 0.08, 40),
    borderRadius: Math.min(width * 0.08, 40) / 2,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.inkBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backButtonText: {
    fontSize: Math.min(width * 0.04, 24),
    color: colors.white,
    fontWeight: "bold",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "sans-serif-bold",
  },
  headerTitle: {
    fontSize: Math.min(width * 0.035, 22),
    fontWeight: "bold",
    color: colors.traditionalBlack,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "sans-serif-bold",
  },
  viewModeButton: {
    width: Math.min(width * 0.08, 40),
    height: Math.min(width * 0.08, 40),
    borderRadius: Math.min(width * 0.08, 40) / 2,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.inkBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  viewModeButtonText: {
    fontSize: Math.min(width * 0.025, 16),
  },

  // 헤더 액션 컨테이너
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.02,
  },

  // 민화변환 버튼
  transformButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.008,
    borderRadius: 20,
    shadowColor: colors.inkBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  transformButtonText: {
    fontSize: Math.min(width * 0.02, 14),
    color: colors.white,
    fontWeight: "600",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Medium" : "sans-serif-medium",
  },

  // 카테고리 필터
  categoryContainer: {
    paddingVertical: height * 0.02,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  categoryScrollContent: {
    paddingHorizontal: width * 0.04,
    gap: width * 0.02,
  },
  categoryButton: {
    backgroundColor: colors.gray,
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.01,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  categoryButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categoryButtonText: {
    fontSize: Math.min(width * 0.025, 16),
    color: colors.darkGray,
    fontWeight: "600",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Medium" : "sans-serif-medium",
  },
  categoryButtonTextActive: {
    color: colors.white,
  },
  addCategoryButton: {
    backgroundColor: colors.secondary,
    width: Math.min(width * 0.08, 40),
    height: Math.min(width * 0.08, 40),
    borderRadius: Math.min(width * 0.08, 40) / 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.primary,
  },
  addCategoryButtonText: {
    fontSize: Math.min(width * 0.04, 24),
    color: colors.primary,
    fontWeight: "bold",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "sans-serif-bold",
  },

  // 빈 상태
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width * 0.04,
  },
  emptyStateIcon: {
    fontSize: Math.min(width * 0.1, 60),
    marginBottom: height * 0.03,
  },
  emptyStateTitle: {
    fontSize: Math.min(width * 0.04, 24),
    fontWeight: "bold",
    color: colors.traditionalBlack,
    marginBottom: height * 0.01,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "sans-serif-bold",
  },
  emptyStateText: {
    fontSize: Math.min(width * 0.025, 16),
    color: colors.darkGray,
    textAlign: "center",
    marginBottom: height * 0.04,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Regular" : "sans-serif",
  },
  emptyStateButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.015,
    borderRadius: 8,
    shadowColor: colors.inkBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  emptyStateButtonText: {
    fontSize: Math.min(width * 0.025, 16),
    color: colors.white,
    fontWeight: "600",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Medium" : "sans-serif-medium",
  },

  // 이미지 목록
  imageList: {
    paddingHorizontal: width * 0.02,
    paddingTop: height * 0.02,
    alignItems: "flex-start",
  },

  // 그리드 아이템
  gridItem: {
    width: width * 0.15,
    height: width * 0.15,
    margin: width * 0.01,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: colors.white,
    shadowColor: colors.inkBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  gridImage: {
    width: "100%",
    height: "100%",
  },
  gridImageOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: width * 0.02,
  },
  gridImageTitle: {
    fontSize: Math.min(width * 0.02, 14),
    color: colors.white,
    fontWeight: "600",
    marginBottom: height * 0.005,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Medium" : "sans-serif-medium",
  },
  gridImageTimestamp: {
    fontSize: Math.min(width * 0.018, 12),
    color: colors.lightGray,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Regular" : "sans-serif",
  },

  // 리스트 아이템
  listItem: {
    flexDirection: "row",
    backgroundColor: colors.white,
    marginBottom: height * 0.015,
    borderRadius: 12,
    padding: width * 0.02,
    shadowColor: colors.inkBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  listImage: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: 8,
  },
  listItemInfo: {
    flex: 1,
    marginLeft: width * 0.02,
    justifyContent: "center",
  },
  listItemTitle: {
    fontSize: Math.min(width * 0.025, 16),
    fontWeight: "600",
    color: colors.traditionalBlack,
    marginBottom: height * 0.005,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Medium" : "sans-serif-medium",
  },
  listItemCategory: {
    fontSize: Math.min(width * 0.02, 14),
    color: colors.primary,
    marginBottom: height * 0.005,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Regular" : "sans-serif",
  },
  listItemTimestamp: {
    fontSize: Math.min(width * 0.018, 12),
    color: colors.darkGray,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Regular" : "sans-serif",
  },
  listItemActions: {
    justifyContent: "center",
    gap: height * 0.005,
  },
  listActionButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.005,
    borderRadius: 6,
    minWidth: width * 0.08,
    alignItems: "center",
  },
  listActionButtonText: {
    fontSize: Math.min(width * 0.018, 12),
    color: colors.white,
    fontWeight: "600",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Medium" : "sans-serif-medium",
  },
  deleteButton: {
    backgroundColor: colors.error,
  },
  deleteButtonText: {
    color: colors.white,
  },

  // 모달 스타일
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width * 0.04,
  },
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: 16,
    width: "100%",
    maxWidth: width * 0.9,
    maxHeight: height * 0.8,
    shadowColor: colors.inkBlack,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.02,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  modalTitle: {
    fontSize: Math.min(width * 0.035, 20),
    fontWeight: "bold",
    color: colors.traditionalBlack,
    flex: 1,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "sans-serif-bold",
  },
  closeButton: {
    width: Math.min(width * 0.06, 32),
    height: Math.min(width * 0.06, 32),
    borderRadius: Math.min(width * 0.06, 32) / 2,
    backgroundColor: colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: Math.min(width * 0.04, 20),
    color: colors.darkGray,
    fontWeight: "bold",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "sans-serif-bold",
  },
  modalImageContainer: {
    padding: width * 0.04,
    alignItems: "center",
  },
  modalImage: {
    width: "100%",
    height: height * 0.4,
    borderRadius: 12,
  },
  modalInfo: {
    paddingHorizontal: width * 0.04,
    paddingBottom: height * 0.02,
  },
  modalCategoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: height * 0.01,
  },
  modalCategory: {
    fontSize: Math.min(width * 0.025, 16),
    color: colors.primary,
    fontWeight: "600",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Medium" : "sans-serif-medium",
  },
  editCategoryButton: {
    backgroundColor: colors.secondary,
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.005,
    borderRadius: 6,
  },
  editCategoryButtonText: {
    fontSize: Math.min(width * 0.018, 12),
    color: colors.primary,
    fontWeight: "600",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Medium" : "sans-serif-medium",
  },
  modalTimestamp: {
    fontSize: Math.min(width * 0.02, 14),
    color: colors.darkGray,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Regular" : "sans-serif",
  },
  modalActions: {
    flexDirection: "row",
    paddingHorizontal: width * 0.04,
    paddingBottom: height * 0.03,
    gap: width * 0.02,
  },
  modalActionButton: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: height * 0.015,
    borderRadius: 8,
    alignItems: "center",
  },
  modalActionButtonText: {
    fontSize: Math.min(width * 0.025, 16),
    fontWeight: "600",
    color: colors.white,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Medium" : "sans-serif-medium",
  },

  // 카테고리 모달 스타일
  categoryModalContent: {
    backgroundColor: colors.white,
    borderRadius: 16,
    width: "100%",
    maxWidth: width * 0.8,
    shadowColor: colors.inkBlack,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  categoryModalBody: {
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.02,
  },
  categoryModalLabel: {
    fontSize: Math.min(width * 0.025, 16),
    fontWeight: "600",
    color: colors.traditionalBlack,
    marginBottom: height * 0.01,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Medium" : "sans-serif-medium",
  },
  categoryModalInput: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 8,
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.015,
    fontSize: Math.min(width * 0.025, 16),
    color: colors.traditionalBlack,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Regular" : "sans-serif",
  },
  cancelButton: {
    backgroundColor: colors.lightGray,
  },
  cancelButtonText: {
    color: colors.darkGray,
  },

  // 카테고리 수정 모달 스타일
  categoryModalSubLabel: {
    fontSize: Math.min(width * 0.02, 14),
    color: colors.darkGray,
    marginBottom: height * 0.02,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Regular" : "sans-serif",
  },
  categorySelectionList: {
    maxHeight: height * 0.3,
  },
  categorySelectionItem: {
    backgroundColor: colors.gray,
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.015,
    borderRadius: 8,
    marginBottom: height * 0.01,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  categorySelectionItemActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categorySelectionItemText: {
    fontSize: Math.min(width * 0.025, 16),
    color: colors.traditionalBlack,
    fontWeight: "600",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Medium" : "sans-serif-medium",
  },
  categorySelectionItemTextActive: {
    color: colors.white,
  },
});
